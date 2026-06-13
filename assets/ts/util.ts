import Cookies from "js-cookie";
import { checkHDR } from "hdr-canvas";

function inView(fragment: Element, callback: () => void): void {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  }, options);

  observer.observe(fragment);
}

export function textEffects() {
  const inViewEffects: { [key: string]: { class: string; duration: number } } =
    {
      ".card .post-body": { class: "text-focus-in", duration: 1000 },
    };

  Object.keys(inViewEffects).forEach((sel) => {
    document.querySelectorAll(sel).forEach((fragment: Element) => {
      inView(fragment, () => {
        fragment.classList.add(inViewEffects[sel].class);
        setTimeout(() => {
          fragment.classList.remove(inViewEffects[sel].class);
        }, inViewEffects[sel].duration);
      });
    });
  });
}

type PreloadFonts = { [key: string]: string };

export function fontsLoaded(fonts: PreloadFonts): void {
  let interval: ReturnType<typeof setInterval> | null = null;
  const timeouts: ReturnType<typeof setTimeout>[] = [];

  function fontCheck() {
    if (!document.fonts) {
      console.warn("Font loading API not supported in this browser.");
      return;
    }

    let allLoaded = true;
    for (const font in fonts) {
      if (document.fonts.check(fonts[font])) {
        document.body.classList.add(`${font}-loaded`);
      } else {
        allLoaded = false;
      }
    }

    if (allLoaded && interval) {
      console.log("All fonts loaded!");
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    }
  }

  for (const font in fonts) {
    setTimeout(() => {
      document.body.classList.add(`${font}-loaded`);
      const allForced = Object.keys(fonts).every((f) =>
        document.body.classList.contains(`${f}-loaded`),
      );
      if (allForced && interval) clearInterval(interval);
    }, 3000);
  }

  interval = setInterval(fontCheck, 200);
}

export function displayHDRWarning() {
  const cookieName = "hdr-notice";
  if (!checkHDR()) {
    console.warn("Browser doesn't support HDR images!");
    if (Cookies.get(cookieName) === "true") {
      return;
    }

    const warningElement = document.querySelector<HTMLElement>("#hdr-warning");

    if (warningElement) {
      warningElement.innerHTML =
        "<i class='close'></i><span class='hdr-warning-text'>This page offers HDR content that your monitor unfortunately does not support. Further information can be found on the <a href='https://gregbenzphotography.com/hdr/'>HDR page by Greg Benz</a>.</span> <button class='hdr-ok button'><span>Ok</span></button>";
      warningElement.style.display = "block";

      warningElement
        .querySelectorAll(".close, .hdr-ok.button")
        .forEach((close: Element) => {
          if (close instanceof HTMLElement) {
            close.addEventListener("click", () => {
              Cookies.set(cookieName, "true", {
                expires: 7,
                path: "/",
                sameSite: "Strict",
              });
              warningElement.classList.add("hidden");
            });
          }
        });
    } else {
      console.error("HDR warning element not found.");
    }
  }
}

export function setupMenu(menuLinkHandler: (e: Event) => void): void {
  // Add click event listener to menu links
  document.querySelectorAll("#menu a").forEach((link: Element) => {
    if (link instanceof HTMLAnchorElement) {
      link.removeEventListener("click", menuLinkHandler);
      link.addEventListener("click", menuLinkHandler);
    }
  });

  // Add click event listener to burger menu button
  const burgerButton = document.querySelector<HTMLInputElement>(
    "input.burger-menu-button",
  );

  if (burgerButton) {
    burgerButton.addEventListener("click", (e: MouseEvent) => {
      if (e.target instanceof HTMLInputElement) {
        if (e.target.checked) {
          const activeCard = document.querySelector(".card.active");
          if (activeCard) {
            e.target.dataset.caller = activeCard.id;
          }
          e.target.setAttribute("aria-expanded", "true");
          document.body.classList.add("noscroll");
        } else {
          e.target.setAttribute("aria-expanded", "false");
          document.body.classList.remove("noscroll");
          const activeId = e.target.dataset.caller;
          if (activeId) {
            const activeCard = document.getElementById(activeId);
            if (activeCard) {
              activeCard.scrollIntoView({ behavior: "smooth" });
            } else {
              console.log("Last active card is null!");
            }
          }
        }
      } else {
        console.error(
          "Burger menu button event target is not an input element.",
        );
      }
    });
    console.log("Burger menu button event listener added.");
  } else {
    console.error("Burger menu button not found!");
  }
}

export function slider(): void {
  const inactiveColumns = document.querySelectorAll(".section.column.inactive");
  inactiveColumns.forEach((column: Element) => {
    column.addEventListener(
      "click",
      (event: Event) => {
        const activeColumn = document.querySelector(".section.column.active");
        if (activeColumn) {
          if (
            event.currentTarget != null &&
            event.currentTarget instanceof HTMLElement
          ) {
            event.currentTarget.classList.remove("inactive");
            event.currentTarget.classList.add("active");
          }
          activeColumn.classList.remove("active");
          activeColumn.classList.add("inactive");
          slider();
        } else {
          console.error("No active section found.");
        }
      },
      { once: true },
    );
  });
}

export function isTouchDevice(): boolean {
  return window.matchMedia("(pointer: coarse)").matches;
}

export function createMouseShadowEffect(
  selector: string,
): (() => void) | undefined {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  if (isTouchDevice()) {
    return;
  }

  if (elements.length === 0) {
    console.warn(`No elements to add shadow to: "${selector}"`);
    return;
  }

  const SHADOW_1_MAX = 8;
  const SHADOW_1_COLOR = "#262626";
  const SHADOW_2_COLOR = "#4d4d4d";
  const SHADOW_2_MAX = 16;

  function updateShadow(e: MouseEvent): void {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();

      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      const dx = elCenterX - e.clientX;
      const dy = elCenterY - e.clientY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const normalizedX = distance === 0 ? 0 : dx / distance;
      const normalizedY = distance === 0 ? 0 : dy / distance;

      const shadow1X = (normalizedX * SHADOW_1_MAX).toFixed(2);
      const shadow1Y = (normalizedY * SHADOW_1_MAX).toFixed(2);
      const shadow2X = (normalizedX * SHADOW_2_MAX).toFixed(2);
      const shadow2Y = (normalizedY * SHADOW_2_MAX).toFixed(2);

      el.style.textShadow = `
        ${shadow1X}px ${shadow1Y}px 0px ${SHADOW_1_COLOR},
        ${shadow2X}px ${shadow2Y}px 0px ${SHADOW_2_COLOR}
      `;
    });
  }

  document.addEventListener("mousemove", updateShadow);

  return function cleanup(): void {
    document.removeEventListener("mousemove", updateShadow);
    elements.forEach((el) => {
      el.style.textShadow = "";
    });
  };
}
