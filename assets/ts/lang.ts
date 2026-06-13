const defaultLang = "en";

export function setupLangSwitch(
  base?: string,
  curLang?: string,
  selector?: string,
) {
  let resolvedLang: string;
  if (!curLang) {
    const docLang = document.documentElement.getAttribute("lang");
    resolvedLang = docLang ?? defaultLang;
  } else {
    resolvedLang = curLang;
  }
  console.log(`Resolved language: ${resolvedLang}`);

  const resolvedSelector = selector ?? "menu.lang-switch";

  const switchElement = document.querySelector<HTMLElement>(resolvedSelector);
  if (switchElement === null) {
    console.error(`Can't find element for selector: ${resolvedSelector}`);
    return;
  }
  const switcher = switchElement;

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
        console.log(
          `Rewrote href: ${linkAttr} → ${normalizedBase + normalizedPath}`,
        );
      }
    }
  });

  const waitLongPress: number = 1000;
  const waitCollapse: number = 10000;
  let clickTimer: ReturnType<typeof setTimeout> | undefined;
  let closeTimer: ReturnType<typeof setTimeout> | undefined;
  let tmpListener: ((ev: Event) => void) | null = null;

  const linkClickInterceptor = (e: Event) => {
    e.preventDefault();
    console.log(
      "State: INTERCEPTED — first click blocked, switcher not yet expanded",
    );
  };

  function cancelClickInterceptor(this: HTMLElement) {
    this.removeEventListener("click", linkClickInterceptor);
    console.log(
      `State: INTERCEPTOR REMOVED on "${this.textContent?.trim()}" — next click will navigate`,
    );
  }

  function expandSwitcher(this: HTMLElement) {
    switcher.classList.add("expanded");
    switcher.classList.remove("pressed");
    console.log("[LangSwitch] State: EXPANDED — all language options visible");

    setTimeout(() => {
      switcher.querySelectorAll(".lang.inactive a").forEach((lang) => {
        if (lang instanceof HTMLElement) {
          cancelClickInterceptor.call(lang);
        }
      });
      console.log(
        "[LangSwitch] State: INTERCEPTORS REMOVED — next click will navigate",
      );
    }, 0);

    console.log(
      `[LangSwitch] Collapse timer started — will collapse in ${waitCollapse}ms`,
    );
    closeTimer = setTimeout(reset.bind(this), waitCollapse);
  }

  let longPressMouseUpHandler: ((e: Event) => void) | null = null;
  let longPressMouseLeaveHandler: (() => void) | null = null;
  let longPressTouchCancelHandler: (() => void) | null = null;

  function removeLongPressListeners(target: HTMLElement) {
    if (longPressMouseUpHandler) {
      target.removeEventListener("mouseup", longPressMouseUpHandler);
      longPressMouseUpHandler = null;
      console.log("Removed longPress mouseup listener");
    }
    if (longPressMouseLeaveHandler) {
      target.removeEventListener("mouseleave", longPressMouseLeaveHandler);
      longPressMouseLeaveHandler = null;
      console.log("Removed longPress mouseleave listener");
    }
    if (longPressTouchCancelHandler) {
      target.removeEventListener("touchcancel", longPressTouchCancelHandler);
      longPressTouchCancelHandler = null;
      console.log("Removed longPress touchcancel listener");
    }
  }

  const addOpenHandler = () => {
    clearTimeout(clickTimer);
    clearTimeout(closeTimer);
    console.log(
      "State: READY — click interceptors and press handlers registered",
    );

    switcher.querySelectorAll(".lang.inactive a").forEach((lang) => {
      lang.removeEventListener("click", linkClickInterceptor);
      lang.addEventListener("click", linkClickInterceptor);
      console.log(
        `Click interceptor added to inactive link: "${(lang as HTMLElement).textContent?.trim()}"`,
      );
    });

    if ("ontouchstart" in document.body) {
      console.log("Touch device detected — registering touchstart handlers");
      switcher.querySelectorAll(".lang a").forEach((lang) => {
        lang.removeEventListener("touchstart", press, { capture: true });
        lang.addEventListener("touchstart", press, {
          once: true,
          capture: true,
        });
      });
    } else {
      console.log("Pointer device detected — registering mousedown handlers");
      switcher.querySelectorAll(".lang a").forEach((lang) => {
        lang.removeEventListener("mousedown", press, { capture: true });
        lang.addEventListener("mousedown", press, {
          once: true,
          capture: true,
        });
      });
    }
  };

  function reset(this: HTMLElement) {
    console.log(
      "State: RESETTING — removing expanded/pressed, re-registering handlers",
    );
    switcher.classList.remove("expanded");
    switcher.classList.remove("pressed");
    console.log("State: COLLAPSED — switcher back to initial state");
    removeLongPressListeners(this);
    if (tmpListener !== null) {
      this.removeEventListener("mouseup", tmpListener);
      this.removeEventListener("touchend", tmpListener);
      tmpListener = null;
      console.log("Removed short-press tmpListener");
    }
    addOpenHandler();
  }

  const press = (e: Event): void => {
    function fireClick(this: HTMLElement) {
      console.log(
        "State: SHORT PRESS detected — expanding switcher without navigating",
      );
      expandSwitcher.call(this);
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    if (!(e.target instanceof HTMLAnchorElement)) {
      console.log("press: target is not an anchor, ignoring");
      return;
    }

    if (!e.target.closest(".lang.inactive")) {
      console.log("press: target is active link — passing through");
      return;
    }

    const link: HTMLAnchorElement = e.target;
    console.log(
      `State: PRESSED — mousedown/touchstart on inactive link "${link.textContent?.trim()}"`,
    );
    switcher.classList.add("pressed");

    console.log(
      `Long press timer started — longPress fires in ${waitLongPress}ms if held`,
    );
    tmpListener = fireClick.bind(link);
    link.addEventListener("mouseup", tmpListener, { once: true });
    link.addEventListener("touchend", tmpListener, { once: true });

    clickTimer = setTimeout(longPress.bind(link), waitLongPress);
  };

  function longPress(this: HTMLElement) {
    console.log("State: LONG PRESS detected — expanding with long press");

    if (tmpListener !== null) {
      this.removeEventListener("mouseup", tmpListener);
      this.removeEventListener("touchend", tmpListener);
      tmpListener = null;
      console.log("Short-press listeners removed — long press took over");
    }

    longPressMouseUpHandler = (e: Event) => {
      e.preventDefault();
      console.log(
        "State: LONG PRESS RELEASED (mouseup) — removing long press listeners",
      );
      removeLongPressListeners(this);
    };

    longPressTouchCancelHandler = () => {
      console.log(
        "State: LONG PRESS CANCELLED (touchcancel) — removing long press listeners",
      );
      removeLongPressListeners(this);
    };

    longPressMouseLeaveHandler = () => {
      console.log(
        "State: LONG PRESS INTERRUPTED (mouseleave) — removing long press listeners",
      );
      removeLongPressListeners(this);
    };

    this.addEventListener("mouseup", longPressMouseUpHandler);
    this.addEventListener("touchcancel", longPressTouchCancelHandler);
    this.addEventListener("mouseleave", longPressMouseLeaveHandler);

    expandSwitcher.call(this);
  }

  addOpenHandler();

  console.log("Classifying language list items...");
  switcher.querySelectorAll("li").forEach((lang) => {
    if (
      lang.classList.contains("active") ||
      lang.classList.contains("inactive")
    ) {
      console.log(
        `Skipping already-classified item: "${(lang as HTMLElement).innerText.trim()}"`,
      );
      return;
    }

    if (lang instanceof HTMLElement) {
      const content = lang.innerText.trim();
      if (content.toUpperCase() === resolvedLang.toUpperCase()) {
        lang.classList.add("active");
        console.log(`Classified as ACTIVE: "${content}"`);
      } else {
        lang.classList.add("inactive");
        console.log(`Classified as INACTIVE: "${content}"`);
      }
    }
  });
}
