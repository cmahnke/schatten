import Cookies from "js-cookie";
//import { checkHDR } from "hdr-canvas/src/hdr-check";
import { checkHDR } from "hdr-canvas";

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
      warningElement.style.display = "block";

      warningElement
        .querySelectorAll(".close, .button")
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
