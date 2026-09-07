import { expect, test, type Page } from "@playwright/test";

/*
 * Frontend tests for the sliding window navigation: the page is a 2D card
 * grid with mandatory scroll snapping, the fixed arrows of the
 * .stack-switcher move the window and must only be visible when a move in
 * their direction is possible.
 *
 * Grid layout (column/row -> card id, URL fragment):
 *   col 1 "images":  1/1 (home, no slug), 1/2 #1 .. 1/6 #5
 *   col 2 "about":   2/1 #light .. 2/6 #colophon
 * The last card of column 1 wraps down/right into column 2 and vice versa.
 */

type Arrow = "up" | "left" | "right" | "down";

const ARROWS: Arrow[] = ["up", "left", "right", "down"];

const arrowSelector = (dir: Arrow) => `nav.stack-switcher a:has(.${dir})`;

function collectErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() !== "error") {
      return;
    }
    const text = message.text();
    // 404s (e.g. the generated favicons, which are not part of the repo) and
    // console noise are explicitly out of scope
    if (/Failed to load resource/.test(text) || /favicon/i.test(text)) {
      return;
    }
    errors.push(`console error: ${text}`);
  });
  page.on("requestfailed", (request) => {
    const failure = request.failure()?.errorText ?? "";
    if (/ERR_ABORTED/i.test(failure)) {
      return;
    }
    errors.push(`request failed: ${request.url()} (${failure})`);
  });
  return errors;
}

async function activeCardIds(page: Page): Promise<string[]> {
  return page.evaluate(() =>
    Array.from(document.querySelectorAll("section.card.active")).map(
      (card) => card.id,
    ),
  );
}

async function expectActive(page: Page, id: string, timeout?: number) {
  const options: { message: string; timeout?: number } = {
    message: `active card ${id}`,
  };
  if (timeout !== undefined) {
    options.timeout = timeout;
  }
  await expect.poll(() => activeCardIds(page), options).toEqual([id]);
}

async function expectHash(page: Page, fragment: string) {
  await expect
    .poll(() => page.evaluate(() => window.location.hash))
    .toBe(`#${fragment}`);
}

async function arrowStates(page: Page) {
  return page.evaluate((arrows) => {
    const states: Record<string, string> = {};
    for (const dir of arrows) {
      const anchor = document.querySelector<HTMLAnchorElement>(
        `nav.stack-switcher a:has(.${dir})`,
      );
      states[dir] = anchor?.classList.contains("hidden")
        ? "hidden"
        : "visible";
    }
    return states;
  }, ARROWS);
}

async function expectArrows(page: Page, visible: Arrow[]) {
  const states = await arrowStates(page);
  for (const dir of ARROWS) {
    expect(
      states[dir],
      `arrow '${dir}' should be ${visible.includes(dir) ? "" : "in"}visible`,
    ).toBe(visible.includes(dir) ? "visible" : "hidden");
  }
}

async function clickArrow(page: Page, dir: Arrow) {
  await page.click(arrowSelector(dir));
}

function postBodyState(page: Page, cardId: string) {
  return page.evaluate((id) => {
    const element = document.getElementById(id)?.querySelector(".post-body");
    if (!element) return null;
    return {
      opacity: getComputedStyle(element).opacity,
      animated: element.classList.contains("text-focus-in"),
    };
  }, cardId);
}

test.describe("sliding window navigation", () => {
  let errors: string[];

  test.beforeEach(async ({ context }) => {
    // Pretend the HDR notice was already dismissed, otherwise its overlay
    // intercepts all pointer events on pages without HDR support
    await context.addCookies([
      { name: "hdr-notice", value: "true", url: "http://localhost:1313" },
      // Same for the cookie consent banner of the theme
      {
        name: "cookie-notice-option",
        value: "true",
        url: "http://localhost:1313",
      },
    ]);
  });

  test.beforeEach(({ page }) => {
    errors = collectErrors(page);
  });

  test.afterEach(() => {
    expect(errors, "no page or console errors").toEqual([]);
  });

  test("initial state: home card active, impossible moves hidden", async ({
    page,
  }) => {
    await page.goto("/");
    await expectActive(page, "1/1");
    await expectHash(page, "1/1");
    // First card: no move up or left possible
    await expectArrows(page, ["right", "down"]);
  });

  test("arrow moves update active card, arrows and hash", async ({ page }) => {
    await page.goto("/");
    await expectActive(page, "1/1");

    await clickArrow(page, "right");
    await expectActive(page, "2/1");
    await expectHash(page, "light");
    await expectArrows(page, ["left", "down"]);

    await clickArrow(page, "down");
    await expectActive(page, "2/2");
    await expectHash(page, "phenomenon");
    await expectArrows(page, ["up", "left", "down"]);

    await clickArrow(page, "up");
    await expectActive(page, "2/1");
    await expectHash(page, "light");
    await expectArrows(page, ["left", "down"]);

    await clickArrow(page, "left");
    await expectActive(page, "1/1");
    await expectHash(page, "1/1");
    await expectArrows(page, ["right", "down"]);
  });

  test("full walkthrough: arrows match the grid topology at every step", async ({
    page,
  }) => {
    const steps: Array<{
      dir: Arrow;
      card: string;
      fragment: string;
      visible: Arrow[];
    }> = [
      { dir: "right", card: "2/1", fragment: "light", visible: ["left", "down"] },
      { dir: "down", card: "2/2", fragment: "phenomenon", visible: ["up", "left", "down"] },
      { dir: "down", card: "2/3", fragment: "project", visible: ["up", "left", "down"] },
      { dir: "down", card: "2/4", fragment: "metamodernism", visible: ["up", "left", "down"] },
      { dir: "down", card: "2/5", fragment: "links", visible: ["up", "left", "down"] },
      // Last card of the last column: no move down or right possible
      { dir: "down", card: "2/6", fragment: "colophon", visible: ["up", "left"] },
      { dir: "left", card: "1/6", fragment: "5", visible: ["up", "right", "down"] },
      { dir: "up", card: "1/5", fragment: "4", visible: ["up", "right", "down"] },
      { dir: "up", card: "1/4", fragment: "3", visible: ["up", "right", "down"] },
      { dir: "up", card: "1/3", fragment: "2", visible: ["up", "right", "down"] },
      { dir: "up", card: "1/2", fragment: "1", visible: ["up", "right", "down"] },
      { dir: "up", card: "1/1", fragment: "1/1", visible: ["right", "down"] },
    ];

    await page.goto("/");
    await expectActive(page, "1/1");

    for (const step of steps) {
      await clickArrow(page, step.dir);
      await expectActive(page, step.card);
      await expectHash(page, step.fragment);
      await expectArrows(page, step.visible);
    }
  });

  test("wrap navigation between the columns", async ({ page }) => {
    await page.goto("/");
    // Walk down column 1 to its last card
    const columnOne = ["1/2", "1/3", "1/4", "1/5", "1/6"];
    for (const card of columnOne) {
      await clickArrow(page, "down");
      await expectActive(page, card);
    }
    // Down from the bottom of column 1 wraps into column 2
    await clickArrow(page, "down");
    await expectActive(page, "2/1");
    await expectArrows(page, ["left", "down"]);

    // Walk back and wrap horizontally
    const columnTwo = ["2/2", "2/3", "2/4", "2/5", "2/6"];
    for (const card of columnTwo) {
      await clickArrow(page, "down");
      await expectActive(page, card);
    }
    await clickArrow(page, "left");
    await expectActive(page, "1/6");
    await expectArrows(page, ["up", "right", "down"]);
    await clickArrow(page, "right");
    await expectActive(page, "2/6");
    await expectArrows(page, ["up", "left"]);
  });

  test("hidden arrows are inert", async ({ page }) => {
    await page.goto("/");
    await expectActive(page, "1/1");

    const styles = await page.evaluate((arrows) => {
      const result: Record<string, { hidden: boolean; opacity: string; pointerEvents: string }> = {};
      for (const dir of arrows) {
        const anchor = document.querySelector<HTMLAnchorElement>(
          `nav.stack-switcher a:has(.${dir})`,
        );
        const style = getComputedStyle(anchor!);
        result[dir] = {
          hidden: anchor!.classList.contains("hidden"),
          opacity: style.opacity,
          pointerEvents: style.pointerEvents,
        };
      }
      return result;
    }, ARROWS);

    expect(styles.up).toMatchObject({ hidden: true, opacity: "0" });
    expect(styles.left).toMatchObject({ hidden: true, opacity: "0" });
    expect(styles.right).toMatchObject({ opacity: "1", pointerEvents: "auto" });

    // A programmatic click on a hidden arrow must not navigate
    await page.evaluate(() => {
      (
        document.querySelector("nav.stack-switcher a:has(.up)") as HTMLElement
      ).click();
    });
    await page.waitForTimeout(500);
    await expectActive(page, "1/1");
  });

  test("browser back and forward restore the previous card", async ({
    page,
  }) => {
    await page.goto("/");
    await clickArrow(page, "right");
    await expectActive(page, "2/1");
    await clickArrow(page, "down");
    await expectActive(page, "2/2");

    await page.goBack();
    await expectActive(page, "2/1");
    await expectHash(page, "light");

    await page.goForward();
    await expectActive(page, "2/2");
    await expectHash(page, "phenomenon");
  });

  test("deep link scrolls to the linked card", async ({ page }) => {
    await page.goto("/#metamodernism");
    await expectActive(page, "2/4");
    await expectHash(page, "metamodernism");
    await expectArrows(page, ["up", "left", "down"]);

    // Arrows keep working after a deep link
    await clickArrow(page, "down");
    await expectActive(page, "2/5");
    await expectHash(page, "links");
  });

  test("card text fades in during slide changes", async ({ page }) => {
    await page.goto("/");
    await expectActive(page, "1/1");
    // Cards without activation start hidden
    expect(await postBodyState(page, "1/2")).toMatchObject({
      opacity: "0",
      animated: false,
    });

    // The fade starts immediately on navigation, while the card slides in
    await clickArrow(page, "right");
    expect(await postBodyState(page, "2/1")).toMatchObject({ animated: true });
    await expectActive(page, "2/1");
    await expect
      .poll(async () => (await postBodyState(page, "2/1"))?.opacity)
      .toBe("1");

    // The deactivated card's text resets and hides again
    await clickArrow(page, "down");
    await expectActive(page, "2/2");
    await expect
      .poll(async () => (await postBodyState(page, "2/1"))?.opacity)
      .toBe("0");
    expect(await postBodyState(page, "2/2")).toMatchObject({
      animated: true,
    });
  });

  test("menu links scroll to the linked card", async ({ page }) => {
    await page.goto("/");
    await page.check("input.burger-menu-button");
    await page.click('#menu a[href="#phenomenon"]');
    await expectActive(page, "2/2");
    await expectHash(page, "phenomenon");
  });

  test.describe("mobile touch navigation", () => {
    test.use({
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 3,
    });

    // Flick gesture via CDP touch events: a slow drag over ~0.5s with a
    // 700px distance, so the snap always lands on the adjacent card
    async function swipe(
      page: Page,
      from: { x: number; y: number },
      to: { x: number; y: number },
    ) {
      const cdp = await page.context().newCDPSession(page);
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x: from.x, y: from.y }],
      });
      const steps = 16;
      for (let i = 1; i <= steps; i++) {
        await cdp.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [
            {
              x: from.x + ((to.x - from.x) * i) / steps,
              y: from.y + ((to.y - from.y) * i) / steps,
            },
          ],
        });
        await page.waitForTimeout(30);
      }
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await cdp.detach();
      // Let the momentum scrolling and snapping finish before the next
      // gesture, a new touch during that window cancels the fling
      await page.waitForTimeout(700);
    }

    // Performs the gesture until the expected card becomes active, flicks
    // can occasionally snap back without progress
    async function swipeUntilActive(
      page: Page,
      expected: string,
      gesture: (page: Page) => Promise<void>,
    ) {
      await test.step(`swipe until ${expected}`, async () => {
        for (let attempt = 0; attempt < 3; attempt++) {
          await gesture(page);
          try {
            await expectActive(page, expected, 2500);
            return;
          } catch {
            // retry
          }
        }
        await expectActive(page, expected);
      });
    }

    const swipeLeft = (page: Page) =>
      swipe(page, { x: 370, y: 420 }, { x: 20, y: 420 });
    const swipeRight = (page: Page) =>
      swipe(page, { x: 20, y: 420 }, { x: 370, y: 420 });
    const swipeUp = (page: Page) =>
      swipe(page, { x: 195, y: 780 }, { x: 195, y: 80 });

    test("initial state on mobile", async ({ page }) => {
      await page.goto("/");
      await expectActive(page, "1/1");
      await expectArrows(page, ["right", "down"]);
    });

    test("swiping moves the window and updates the arrows", async ({
      page,
    }) => {
      await page.goto("/");
      await expectActive(page, "1/1");

      await swipeUntilActive(page, "2/1", swipeLeft);
      await expectHash(page, "light");
      await expectArrows(page, ["left", "down"]);

      await swipeUntilActive(page, "2/2", swipeUp);
      await expectHash(page, "phenomenon");
      await expectArrows(page, ["up", "left", "down"]);

      // Swiping back horizontally lands on the vertically nearest card of
      // the first column
      await swipeUntilActive(page, "1/2", swipeRight);
      await expectHash(page, "1");
      await expectArrows(page, ["up", "right", "down"]);

      // The text of the card swiped in view faded in during the slide
      await expect
        .poll(async () => (await postBodyState(page, "1/2"))?.opacity)
        .toBe("1");
    });

    test("swiping to the last card hides impossible arrows", async ({
      page,
    }) => {
      test.setTimeout(90_000);
      await page.goto("/");
      await swipeUntilActive(page, "2/1", swipeLeft);

      // Swipe up to the bottom of column 2
      const columnTwo = ["2/2", "2/3", "2/4", "2/5", "2/6"];
      for (const card of columnTwo) {
        await swipeUntilActive(page, card, swipeUp);
      }
      await expectArrows(page, ["up", "left"]);
    });

    test("arrow taps work on touch devices", async ({ page }) => {
      await page.goto("/");
      await page.tap(arrowSelector("down"));
      await expectActive(page, "1/2");
      await expectArrows(page, ["up", "right", "down"]);

      await page.tap(arrowSelector("right"));
      await expectActive(page, "2/2");
      await expectArrows(page, ["up", "left", "down"]);
    });
  });
});
