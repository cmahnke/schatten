import { inView } from "motion";
import Color from "color";

type ColorInstance = InstanceType<typeof Color>;

export const fonts: { [key: string]: string } = {
  handjet: "1em Handjet",
  "special-elite": "1em Special Elite",
};

export type Directions = "left" | "right" | "up" | "down";
export const directions: Directions[] = ["left", "right", "up", "down"];

export const maxShade: number = 20;
export const colorSteps: number = Math.round((255 / 100) * maxShade);

let bgColor: ColorInstance = new Color("#ffffff");

document.addEventListener("DOMContentLoaded", function () {
  const rawColor = getComputedStyle(document.body)
    .getPropertyValue("--background-color")
    .trim();
  bgColor = rawColor ? new Color(rawColor) : new Color("#ffffff");
});

export function isDirection(s: string): s is Directions {
  return (directions as string[]).includes(s);
}

export function findTarget(target: string): HTMLElement | null {
  let targetElem = document.getElementById(target);
  if (!targetElem) {
    targetElem = document.querySelector(`*[data-slug='${target}']`);
  }
  return targetElem;
}

export function generateURLFragment(
  col: string | undefined,
  row: string | undefined,
  fragment?: string,
): string | undefined {
  if (col === undefined || row === undefined) {
    console.log(
      "Column or row data attribute is undefined, cannot generate URL fragment.",
    );
    return undefined;
  }

  let id =
    fragment === undefined ? `${col}/${row}` : `${col}/${row}/${fragment}`;

  const target = document.getElementById(id);
  if (target !== null && "slug" in target.dataset) {
    id = target.dataset["slug"]!;
  }
  console.log(`Generated URL fragment: ${id}`);
  return id;
}

export function toggleNav(elem: HTMLElement) {
  console.log(`Toggling navigation for element ${elem.id}`, elem);
  for (const direction of directions) {
    if (direction in elem.dataset) {
      const clickHandler = () => {
        const targetId = elem.dataset[direction];
        if (targetId !== undefined) {
          const target = document.getElementById(targetId);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          } else {
            console.error(`Target element '${targetId}' not found.`);
            //console.error(`Target element '${targetId}' not found.`);
          }
        }
        return false;
      };

      document
        .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
        .forEach((arrow: Element) => {
          console.log(`Showing ${direction} arrow for element`, arrow);
          if (arrow instanceof HTMLAnchorElement) {
            arrow.classList.remove("hidden");
            arrow.onclick = clickHandler;
            console.trace(`Added click handler for ${direction} arrow`, arrow);
          } else {
            console.error(
              `Arrow element for direction '${direction}' is not an anchor element.`,
            );
          }
        });
    } else {
      document
        .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
        .forEach((arrow: Element) => {
          console.log(`Hiding ${direction} arrow for element`, arrow);
          if (arrow instanceof HTMLAnchorElement) {
            arrow.classList.add("hidden");
          } else {
            console.error(
              `Arrow element for direction '${direction}' is not an anchor element.`,
            );
          }
        });
    }
  }
}

export function generatedCallback(elem: HTMLElement) {
  if ("jump" in elem.dataset) {
    const targetId = elem.dataset["jump"];
    if (targetId !== undefined) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Target element '${targetId}' not found.`);
      }
    }
  }
}

function lightenBy(color: ColorInstance, amount: number): ColorInstance {
  const lightness = color.lightness();
  return color.lightness(lightness + amount);
}

export function handleCardIntersect(entries: IntersectionObserverEntry[]) {
  function roundToDecimals(num: number, decimals = 6) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }

  entries.forEach((entry: IntersectionObserverEntry) => {
    if (!(entry.target instanceof HTMLElement)) {
      return;
    }
    const entryElement: HTMLElement = entry.target;

    const shade = (1 - entry.intersectionRatio) * 100 * (maxShade / 100);
    const bg = lightenBy(bgColor, shade);
    if (!entryElement.classList.contains("__inserted")) {
      entryElement.style.backgroundColor = bg.hex();
    }

    if (!entry.isIntersecting || !entryElement.classList.contains("card")) {
      return;
    }

    let ratio: number = 1;

    if (entry.rootBounds === null || entryElement.parentNode === null) {
      return;
    }

    if (
      entry.rootBounds.height < entryElement.offsetHeight ||
      entry.rootBounds.width < entryElement.offsetWidth
    ) {
      if (
        entry.intersectionRect.width <
        (entryElement.parentNode as HTMLElement).getBoundingClientRect().width
      ) {
        return;
      }
      if (
        entry.intersectionRect.height <
        entry.rootBounds.height - entry.rootBounds.height / 20
      ) {
        return;
      }

      const clientSize =
        entry.boundingClientRect.width * entry.boundingClientRect.height;
      const intersectionSize =
        entry.intersectionRect.width * entry.intersectionRect.height;

      // TODO: Check if the rounding is really needed (for the string from the data attribute) or if we can just compare the raw numbers
      ratio = roundToDecimals(intersectionSize / clientSize, 6);

      entryElement.dataset.ratio = `${ratio}`;
    }

    if (roundToDecimals(entry.intersectionRatio, 6) === ratio) {
      entryElement.classList.add("active");
      const urlFragment = generateURLFragment(
        entryElement.dataset.col,
        entryElement.dataset.row,
      );
      if (urlFragment !== undefined) {
        window.location.hash = urlFragment;
      }
      toggleNav(entryElement);

      if (entryElement.classList.contains("__inserted")) {
        generatedCallback(entryElement);
      }
    } else if (
      entry.intersectionRatio < 1 &&
      entryElement.classList.contains("active")
    ) {
      entryElement.classList.remove("active");
      entryElement.classList.add("previous");
    } else if (entryElement.classList.contains("previous")) {
      entryElement.classList.remove("previous");
    }
  });
}

export function menuLinkHandler(e: Event) {
  if (e.target instanceof HTMLAnchorElement && e.target.href !== "") {
    e.preventDefault();

    const target = e.target.href.split("#")[1];
    const targetElem = findTarget(target);

    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Target element '${target}' not found.`);
    }

    const menuCheckbox = document.querySelector(
      ".menu .burger-menu-button",
    ) as HTMLInputElement | null;
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  }
}

export function buildThresholdList(numSteps: number): number[] {
  const thresholds: number[] = [];
  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
}

export function setupGrid(
  root: string,
  columnSelector: string,
  cardSelector: string,
) {
  function columnHeight(column: HTMLElement): number {
    return Array.from(column.querySelectorAll(".card")).reduce((h, card) => {
      return h + card.getBoundingClientRect().height;
    }, 0);
  }

  const startSelector: HTMLElement | null = document.querySelector(root);
  if (startSelector === null) {
    return;
  }

  let maxHeight: number = 0;
  let maxCards: number = 0;
  let maxWidth: number = 0;
  const grid: { cards: number; height: number }[] = [];

  const columns: HTMLElement[] = Array.from(
    startSelector.querySelectorAll(columnSelector),
  );

  columns.forEach((column: HTMLElement) => {
    const cards = Array.from(
      column.querySelectorAll(cardSelector),
    ) as HTMLElement[];
    const numCards: number = cards.length;
    const overallHeight: number = columnHeight(column);

    maxWidth++;
    if (numCards > maxCards) maxCards = numCards;
    if (overallHeight > maxHeight) maxHeight = overallHeight;

    grid[maxWidth - 1] = { cards: numCards, height: overallHeight };

    column.dataset.col = maxWidth.toString();
    if (!column.hasAttribute("id")) {
      column.setAttribute("id", `${maxWidth}`);
    }
    for (let i = 0; i < cards.length; i++) {
      cards[i].dataset.row = (i + 1).toString();
      cards[i].dataset.col = maxWidth.toString();
      if (!cards[i].hasAttribute("id")) {
        cards[i].setAttribute("id", `${maxWidth}/${i + 1}`);
      }
    }
  });
  console.log(
    `Initial grid setup: maxWidth=${maxWidth}, maxCards=${maxCards}, maxHeight=${maxHeight}`,
  );
  // Make the grid even
  for (let i = 0; i < grid.length; i++) {
    const column = columns[i];

    if (grid[i].cards < maxCards) {
      const newTiles = maxCards - grid[i].cards;
      for (let n = 0; n < newTiles; n++) {
        const newCard = document.createElement("div");
        newCard.classList.add("__inserted", "card");
        newCard.dataset.row = (grid[i].cards + 1 + n).toString();
        newCard.dataset.col = (i + 1).toString();
        newCard.setAttribute("id", `${i + 1}/${grid[i].cards + 1 + n}`);

        const next = grid.length > i + 1 ? `${i + 2}/1` : "1/1";
        newCard.dataset.jump = next;
        newCard.dataset.down = next;
        newCard.dataset.right = next;

        column.appendChild(newCard);
        grid[i].height = columnHeight(column);
      }
    }

    const lookAround = (id: string): boolean => {
      const next = document.getElementById(id);
      if (next === null) {
        console.log(`Next element for id ${id} is null!`);
        return false;
      }
      return !next.classList.contains("__inserted");
    };

    const cards = Array.from(
      column.querySelectorAll(cardSelector),
    ) as HTMLElement[];

    for (let j = 0; j < cards.length; j++) {
      if (cards[j].classList.contains("__inserted")) continue;

      if (j > 0) {
        cards[j].dataset.up = `${i + 1}/${j}`;
      }
      if (j + 1 < cards.length) {
        const nextId = `${i + 1}/${j + 2}`;
        if (lookAround(nextId)) {
          cards[j].dataset.down = nextId;
        }
      } else if (j + 1 === cards.length && i + 1 < maxWidth) {
        const nextId = `${i + 2}/1`;
        if (lookAround(nextId)) {
          cards[j].dataset.down = nextId;
        }
      }
      if (i + 1 < maxWidth) {
        const nextId = `${i + 2}/${j + 1}`;
        if (lookAround(nextId)) cards[j].dataset.right = nextId;
      }
      if (i > 0) {
        const nextId = `${i}/${j + 1}`;
        if (lookAround(nextId)) cards[j].dataset.left = nextId;
      }
    }
  }

  // Check for height differences
  if (window.getComputedStyle(startSelector).display !== "grid") {
    for (let k = 0; k < grid.length; k++) {
      if (grid[k].height < maxHeight) {
        const heightDiff = maxHeight - grid[k].height;
        const lastOfShort = columns[k].querySelector<HTMLElement>(
          `${cardSelector}:last-child`,
        );
        if (lastOfShort !== null) {
          const newHeight =
            lastOfShort.getBoundingClientRect().height + heightDiff;
          lastOfShort.style.height = `${newHeight}px`;
        }
      }
    }
  }
}

export function setupNav(selector?: string) {
  if (!selector) {
    selector = directions
      .map((direction) => `nav.stack-switcher .${direction}`)
      .join(", ");
  }

  console.log(
    `Setting up navigation arrows with selector '${selector}', hiding arrows`,
  );

  document.querySelectorAll(selector).forEach((arrow) => {
    // Hide the link elements that are parent of the arrow
    arrow.parentElement!.classList.add("hidden");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.add("hidden");
        }
      });
    },
    { threshold: 1.0 },
  );

  document.querySelectorAll(selector).forEach((arrow) => {
    observer.observe(arrow);
  });
}

export function textEffects() {
  const inViewEffects: { [key: string]: { class: string; duration: number } } =
    {
      ".card .post-body": { class: "text-focus-in", duration: 1000 },
    };

  const cleanups: (() => void)[] = [];

  Object.keys(inViewEffects).forEach((sel) => {
    document.querySelectorAll(sel).forEach((fragment) => {
      const stop = inView(fragment, () => {
        fragment.classList.add(inViewEffects[sel].class);
        setTimeout(() => {
          fragment.classList.remove(inViewEffects[sel].class);
        }, inViewEffects[sel].duration);
      });
      cleanups.push(stop);
    });
  });

  // Return cleanup so callers can tear down observers
  return () => cleanups.forEach((stop) => stop());
}

/*
export function setupMenu(): void {
  document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", menuLinkHandler);
  });

  const menuButton = document.querySelector<HTMLInputElement>(
    "input.burger-menu-button",
  );
  if (!menuButton) {
    console.warn("Burger menu button not found");
    return;
  }

  menuButton.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLInputElement;
    const activeCard = document.querySelector(".card.active");
    if (target.checked) {
      if (activeCard !== null) {
        target.dataset.caller = activeCard.id;
      }
      target.setAttribute("aria-expanded", "true");
      document.body.classList.add("noscroll");
    } else {
      target.setAttribute("aria-expanded", "false");
      document.body.classList.remove("noscroll");
      const caller = target.dataset.caller;
      if (caller !== undefined) {
        const active = document.getElementById(caller);
        if (active !== null) {
          active.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log("Last active card is null!");
        }
      }
    }
  });
}
*/

export function checkColumns(root: string, columnSelector: string): number {
  const startSelector = document.querySelector(root) as HTMLElement | null;

  if (!startSelector) {
    throw new Error(`Element with selector "${root}" not found`);
  }

  const columns = startSelector.querySelectorAll(columnSelector).length;

  if (window.getComputedStyle(startSelector).display === "grid") {
    const gridTemplate =
      window.getComputedStyle(startSelector).gridTemplateColumns;
    const actualColumns = gridTemplate.split(" ").length;

    if (actualColumns !== columns) {
      const templateColumn = `repeat(${columns}, calc(100vw - 1rem))`;
      startSelector.style.gridTemplateColumns = templateColumn;
    }
  }
  return columns;
}

export function checkWindowResize() {
  window.addEventListener("resize", () => {
    console.log(`Resized window to ${window.innerWidth}x${window.innerHeight}`);
  });
}
