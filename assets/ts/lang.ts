const defaultLang = "en";

// See https://www.sliderrevolution.com/resources/css-hamburger-menu/
export function setupLangSwitch(
  base?: string,
  curLang?: string,
  selector?: string,
) {
  if (curLang === undefined || curLang == null || curLang == "") {
    const docLang = document.querySelector("html")?.getAttribute("lang");
    if (docLang != undefined && docLang !== null) {
      curLang = docLang;
    } else {
      curLang = defaultLang;
    }
  }
  if (selector === undefined) {
    selector = "menu.lang-switch";
  }

  let switcher: HTMLElement;
  const switchElement = document.querySelector(selector);
  if (switchElement !== null) {
    switcher = switchElement as HTMLElement;
  } else {
    console.error(`Can't find element for ${selector}`);
    return;
  }

  switcher.querySelectorAll(".lang a")?.forEach((langLink) => {
    if (langLink instanceof HTMLAnchorElement) {
      const linkAttr = langLink.getAttribute("href");
      if (base !== undefined && !linkAttr?.startsWith("/")) {
        langLink.setAttribute("href", base + "/" + linkAttr);
      }
    }
  });

  //const langLink = switcher.querySelector(".inactive");

  const waitExpanded: number = 1000;
  const waitCollapse: number = 10000;
  let clickTimer: undefined | ReturnType<typeof setTimeout>;
  let closeTimer: undefined | ReturnType<typeof setTimeout>;
  let tmpListener: ((ev: Event) => void) | null = null;

  // TODO: Remove this, only for debug
  function sleep(miliseconds: number) {
    const currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
      console.log("Waiting");
    }
  }

  const linkClickInterceptor = (e: Event) => {
    e.preventDefault();
    console.log("Captured click");
  };

  function cancelClickInterceptor(this: HTMLElement) {
    this.removeEventListener("click", linkClickInterceptor);
    console.log("removed click blocker");
  }

  const addOpenHandler = () => {
    clearTimeout(clickTimer);
    clearTimeout(closeTimer);

    switcher.querySelectorAll(".lang.inactive a").forEach((lang) => {
      lang.addEventListener("click", linkClickInterceptor);
    });

    if ("ontouchstart" in document.body) {
      switcher.querySelectorAll(".lang a").forEach((lang) => {
        lang.addEventListener("touchstart", press, {
          once: true,
          capture: true,
          /* passive: true */
        });
      });
    } else {
      switcher.querySelectorAll(".lang a").forEach((lang) => {
        lang.addEventListener("mousedown", press, {
          once: true,
          capture: true,
        });
      });
    }
  };

  function reset(this: HTMLElement) {
    //TODO: Reset initial state
    switcher.classList.remove("expanded");
    switcher.classList.remove("pressed");
    if (this !== undefined && this !== null && tmpListener !== null) {
      this.removeEventListener("mouseup", tmpListener);
      this.removeEventListener("touchcancel", tmpListener);
      tmpListener = null;
    }
    addOpenHandler();
  }

  const press: (e: Event) => boolean = (e: Event) => {
    function click() {
      switcher.classList.remove("pressed");
      console.log("Firing generated event");
      e.target?.removeEventListener("click", linkClickInterceptor);
      const click = new CustomEvent("click");
      e.target?.dispatchEvent(click);
    }

    e.preventDefault();
    e.stopImmediatePropagation();
    if (e.target !== null && e.target instanceof HTMLAnchorElement) {
      const link: HTMLAnchorElement = e.target;

      console.log("Detected press");
      switcher.classList.add("pressed");
      tmpListener = click.bind(e.target);
      if (tmpListener !== null) {
        link.addEventListener("mouseup", tmpListener);
        link.addEventListener("touchcancel", tmpListener);
      }

      clickTimer = setTimeout(longPress.bind(link), waitExpanded);
    }
    return false;
  };

  function longPress(this: HTMLElement) {
    if (tmpListener !== null) {
      this.removeEventListener("mouseup", tmpListener);
      this.removeEventListener("touchcancel", tmpListener);
    }
    const clickInterceptorRemover = cancelClickInterceptor.bind(this);
    const mouseOut = () => {
      clickInterceptorRemover();
      console.log("mouse out");
    };
    const clickRemover = () => {
      console.warn("Unimplemented method clickRemover");
    };
    this.addEventListener("mouseup", (e: Event) => {
      e.preventDefault();
      clickInterceptorRemover();
      console.log("mouseup");
    });
    this.addEventListener("touchcancel", clickRemover);
    this.addEventListener("mouseout", mouseOut);

    //this.removeEventListener('click', linkClickInterceptor);
    //const link = this;
    /*
      const disableLink = (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
        console.log('Released button during long press');
        //TODO: Remove this
        //sleep(10000);
        return;
      }
      this.addEventListener('mouseup', disableLink, {
        once: true,
      });
      */

    console.log("Detected long press");
    switcher.classList.add("expanded");
    switcher.classList.remove("pressed");

    //sleep(10000);

    closeTimer = setTimeout(reset.bind(this), waitCollapse);
    //reset();
  }

  addOpenHandler();

  switcher.querySelectorAll(`li`).forEach((lang) => {
    if (
      Array.from(lang.classList).some((c) => ["active", "inactive"].includes(c))
    ) {
      return;
    }
    //if (lang.innerText != null || lang.textContent != null) {
    //  let content: string = lang.innerText || lang.textContent;
    if (lang.innerText != null) {
      const content: string = lang.innerText;
      if (content.toUpperCase() == curLang.toUpperCase()) {
        lang.classList.add("active");
      } else {
        lang.classList.add("inactive");
      }
    }
  });
}
