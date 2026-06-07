import Cookies from "js-cookie";
import { checkHDR } from "hdr-canvas";

function inView(fragment: Element, callback: () => void): void {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(callback, options);
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
  let interval: ReturnType<typeof setTimeout> | null = null;
  const timeouts: ReturnType<typeof setTimeout>[] = [];

  function fontCheck() {
    if (document.fonts) {
      for (const font in fonts) {
        if (document.fonts.check(fonts[font])) {
          document.querySelector("body")?.classList.add(`${font}-loaded`);
        }
      }
    }

    if (interval) {
      clearInterval(interval);
    }
  }

  for (const font in fonts) {
    timeouts.push(
      setTimeout(() => {
        document.querySelector("body")?.classList.add(`${font}-loaded`);
      }, 3000),
    );
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

    const warningElement = document.querySelector(
      "#hdr-warning",
    ) as HTMLElement;
    if (warningElement) {

      warningElement.innerHTML =  "<i class='close'></i><span class='hdr-warning-text'>This page offers HDR content that your monitor unfortunately does not support. Further information can be found on the <a href='https://gregbenzphotography.com/hdr/'>HDR page by Greg Benz</a>.</span>  <button class='hdr-ok button' href='#'><span>Ok</span></button>";
      warningElement.style.display = "block";

      warningElement
        .querySelectorAll(".close, .hdr-ok.button")
        .forEach((close: Element) => {
          if (close instanceof HTMLButtonElement) {
            close.addEventListener("click", () => {
              Cookies.set(cookieName, "true", {
                expires: 7,
                path: "",
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
      link.addEventListener("click", menuLinkHandler);
    }
  });

  // Add click event listener to burger menu button
  const burgerButton = document.querySelector(
    "input.burger-menu-button",
  ) as HTMLInputElement;
  if (burgerButton) {
    burgerButton.addEventListener("click", (e: MouseEvent) => {
      //const input = e.target as HTMLInputElement;
      if (e.target instanceof HTMLInputElement) {
        if (e.target.checked) {
          const activeCard = document.querySelector(".card.active");
          if (activeCard) {
            e.target.dataset.caller = activeCard.id;
            e.target.setAttribute("aria-expanded", "true");
            document.body.classList.add("noscroll");
          }
        } else {
          e.target.setAttribute("aria-expanded", "false");
          document.body.classList.remove("noscroll");
          const activeId = e.target?.dataset.caller;
          if (activeId) {
            const activeCard = document.getElementById(activeId);
            if (activeCard) {
              activeCard.scrollIntoView({ behavior: "smooth" });
            } else {
              console.log("Last active card is null!");
            }
          }
        }
      }
    });
  } else {
    console.error("Burger menu button not found!");
  }
}
