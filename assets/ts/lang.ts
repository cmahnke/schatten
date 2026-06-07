const defaultLang = "en";

export function setupLangSwitch(
  base?: string,
  curLang?: string,
  selector?: string,
) {
  let resolvedLang: string;
  if (!curLang) {
    const docLang = document.querySelector("html")?.getAttribute("lang");
    resolvedLang = docLang ?? defaultLang;
  } else {
    resolvedLang = curLang;
  }

  const resolvedSelector = selector ?? "menu.lang-switch";

  const switchElement = document.querySelector(resolvedSelector);
  if (switchElement === null) {
    console.error(`Can't find element for ${resolvedSelector}`);
    return;
  }
  const switcher = switchElement as HTMLElement;

  // Rewrite hrefs if a base path was provided
  switcher.querySelectorAll(".lang a").forEach((langLink) => {
    if (langLink instanceof HTMLAnchorElement) {
      const linkAttr = langLink.getAttribute("href");
      if (base !== undefined && linkAttr) {
        const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
        const normalizedPath = linkAttr.startsWith("/")
          ? linkAttr
          : `/${linkAttr}`;
        langLink.setAttribute("href", normalizedBase + normalizedPath);
      }
    }
  });

  const waitExpanded: number = 1000;
  const waitCollapse: number = 10000;
  let clickTimer: ReturnType<typeof setTimeout> | undefined;
  let closeTimer: ReturnType<typeof setTimeout> | undefined;
  let tmpListener: ((ev: Event) => void) | null = null;

  const linkClickInterceptor = (e: Event) => {
    e.preventDefault();
    console.log("Captured click");
  };

  function cancelClickInterceptor(this: HTMLElement) {
    this.removeEventListener("click", linkClickInterceptor);
    console.log("removed click blocker");
  }

  let longPressMouseUpHandler: ((e: Event) => void) | null = null;
  let longPressMouseOutHandler: (() => void) | null = null;
  let longPressTouchCancelHandler: (() => void) | null = null;

  function removeLongPressListeners(target: HTMLElement) {
    if (longPressMouseUpHandler) {
      target.removeEventListener("mouseup", longPressMouseUpHandler);
      longPressMouseUpHandler = null;
    }
    if (longPressMouseOutHandler) {
      target.removeEventListener("mouseout", longPressMouseOutHandler);
      longPressMouseOutHandler = null;
    }
    if (longPressTouchCancelHandler) {
      target.removeEventListener("touchcancel", longPressTouchCancelHandler);
      longPressTouchCancelHandler = null;
    }
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
    switcher.classList.remove("expanded");
    switcher.classList.remove("pressed");
    removeLongPressListeners(this);
    if (tmpListener !== null) {
      this.removeEventListener("mouseup", tmpListener);
      this.removeEventListener("touchcancel", tmpListener);
      tmpListener = null;
    }
    addOpenHandler();
  }

  const press = (e: Event): boolean => {
    function fireClick() {
      switcher.classList.remove("pressed");
      console.log("Firing generated click event");
      if (e.target instanceof HTMLElement) {
        e.target.removeEventListener("click", linkClickInterceptor);
        e.target.dispatchEvent(new CustomEvent("click"));
      }
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    if (!(e.target instanceof HTMLAnchorElement)) {
      return false;
    }

    const link: HTMLAnchorElement = e.target;
    console.log("Detected press");
    switcher.classList.add("pressed");

    tmpListener = fireClick;
    link.addEventListener("mouseup", tmpListener);
    link.addEventListener("touchcancel", tmpListener);

    clickTimer = setTimeout(longPress.bind(link), waitExpanded);
    return false;
  };

  function longPress(this: HTMLElement) {
    // Remove short-press listeners
    if (tmpListener !== null) {
      this.removeEventListener("mouseup", tmpListener);
      this.removeEventListener("touchcancel", tmpListener);
      tmpListener = null;
    }

    const clickInterceptorRemover = cancelClickInterceptor.bind(this);

    longPressMouseUpHandler = (e: Event) => {
      e.preventDefault();
      clickInterceptorRemover();
      console.log("mouseup after long press");
    };

    longPressTouchCancelHandler = () => {
      clickInterceptorRemover();
      console.log("touchcancel after long press");
    };

    longPressMouseOutHandler = () => {
      clickInterceptorRemover();
      console.log("mouse out after long press");
    };

    this.addEventListener("mouseup", longPressMouseUpHandler);
    this.addEventListener("touchcancel", longPressTouchCancelHandler);
    this.addEventListener("mouseout", longPressMouseOutHandler);

    console.log("Detected long press");
    switcher.classList.add("expanded");
    switcher.classList.remove("pressed");

    closeTimer = setTimeout(reset.bind(this), waitCollapse);
  }

  addOpenHandler();

  switcher.querySelectorAll("li").forEach((lang) => {
    if (
      Array.from(lang.classList).some((c) =>
        ["active", "inactive"].includes(c),
      )
    ) {
      return;
    }

    if (lang instanceof HTMLElement && lang.innerText != null) {
      const content = lang.innerText.trim();
      if (content.toUpperCase() === resolvedLang.toUpperCase()) {
        lang.classList.add("active");
      } else {
        lang.classList.add("inactive");
      }
    }
  });
}