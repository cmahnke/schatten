/*
import { inView } from "motion";
import Color from "color";
import Cookies from "js-cookie";

import { checkHDR } from "hdr-canvas";
import {
  createSwitchGrid,
  addListener,
  DEFAULT_HANDLERS,
} from "./model-switch-board.js";
import {
  initModel,
  DEFAULT_SEPARATORS,
  DEFAULT_LAYOUTS,
  REDRAW_EVENT_NAME,
} from "./model.js";

export const fonts = {
  handjet: "1em Handjet",
  "special-elite": "1em Special Elite",
};
export const directions = ["left", "right", "up", "down"];
export const maxShade = 20; // In percent
export const colorSteps = (255 / 100) * maxShade;
let bgColor;

document.addEventListener("DOMContentLoaded", function () {
  bgColor = new Color(
    getComputedStyle(document.body).getPropertyValue("--background-color"),
  );
});

export function generateURLFragment(col, row, fragment) {
  var id;
  if (fragment === undefined) {
    id = `${col}/${row}`;
  } else {
    id = `${col}/${row}/${fragment}`;
  }
  const target = document.getElementById(id);
  if (target !== null && "slug" in target.dataset) {
    id = target.dataset["slug"];
  }
  return id;
}

export function toggleNav(elem) {
  for (const direction of directions) {
    if (direction in elem.dataset) {
      const clickHandler = () => {
        const targetId = elem.dataset[direction];
        console.log(`Scrolling to ${targetId}`);
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: "smooth" });
        return false;
      };
      document
        .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
        .forEach((arrow) => {
          arrow.classList.remove("hidden");
          arrow.onclick = clickHandler;
        });
    } else {
      document
        .querySelectorAll(`nav.stack-switcher a:has(.${direction})`)
        .forEach((arrow) => {
          arrow.classList.add("hidden");
        });
    }
  }
}

export function generatedCallback(elem) {
  if ("jump" in elem.dataset) {
    const targetId = elem.dataset["jump"];
    const target = document.getElementById(targetId);
    // TODO: Check why this doesn't always work
    target.scrollIntoView({ behavior: "smooth" });
    console.log(`Jumping to ${targetId}`);
  }
}

export function handleCardIntersect(entries) {
  // See https://github.com/Qix-/color/issues/53#issuecomment-656590710
  function lightenBy(color, amount) {
    const lightness = color.lightness();
    return color.lightness(lightness + amount);
  }

  entries.forEach((entry) => {
    var shade = (1 - entry.intersectionRatio) * 100 * (maxShade / 100);
    const bg = lightenBy(bgColor, shade);
    if (!entry.target.classList.contains("__inserted")) {
      entry.target.style.backgroundColor = bg;
    }

    if (!entry.isIntersecting || !entry.target.classList.contains("card")) {
      return;
    }

    let ratio = 1;
    if (
      entry.rootBounds.height < entry.target.offsetHeight ||
      entry.rootBounds.width < entry.target.offsetWidth
    ) {
      // If we are in an overflowing element, just use the given intersaction to compute the ratio, if some heuristics apply
      if (
        entry.intersectionRect.width <
        entry.target.parentNode.getBoundingClientRect().width
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
      ratio = (intersectionSize / clientSize).toFixed(6);

      entry.target.dataset.ratio = ratio;
    }

    if (entry.intersectionRatio.toFixed(6) == ratio) {
      entry.target.classList.add("active");
      window.location.hash = generateURLFragment(
        entry.target.dataset.col,
        entry.target.dataset.row,
      );
      toggleNav(entry.target);

      if (
        entry.target != null &&
        entry.target.classList.contains("__inserted")
      ) {
        generatedCallback(entry.target);
      } else if (entry.target == null) {
        console.log("Card intersect got no target!");
      }

      // TODO: Check if we really need the previous ones
    } else if (
      entry.intersectionRatio < 1 &&
      entry.target.classList.contains("active")
    ) {
      entry.target.classList.remove("active");
      entry.target.classList.add("previous");
    } else if (entry.target.classList.contains("previous")) {
      entry.target.classList.remove("previous");
    }
  });
}

export function findTarget(target) {
  var targetElem = document.getElementById(target);
  if (targetElem == null) {
    targetElem = document.querySelector(`*[data-slug='${target}']`);
  }
  return targetElem;
}

export function menuLinkHandler(e) {
  //TODO: Check if it's an error, if taget is undefined
  if (e.target.href === undefined) {
    return;
  }
  var target = e.target.href.split("#")[1];
  var targetElem = findTarget(target);
  e.preventDefault();
  // Close menu
  document.querySelector(".menu .burger-menu-button").checked = false;
  targetElem.scrollIntoView({ behavior: "smooth" });
}

export function buildThresholdList(numSteps) {
  let thresholds = [];
  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  thresholds.push(0);
  return thresholds;
}


export function setupGrid(root, columnSelector, cardSelector) {
  function columnHeight(column) {
    return Array.from(column.querySelectorAll(".card")).reduce((h, card) => {
      return h + card.getBoundingClientRect().height;
    }, 0);
  }

  var startSelector = document.querySelector(root);
  var maxHeight = 0;
  var maxCards = 0;
  var maxWidth = 0;
  var grid = [];
  startSelector.querySelectorAll(columnSelector).forEach((column) => {
    var cards = column.querySelectorAll(cardSelector);
    var numCards = cards.length;
    var overallHeight = columnHeight(column);

    maxWidth++;
    if (numCards > maxCards) {
      maxCards = numCards;
    }
    if (overallHeight > maxHeight) {
      maxHeight = overallHeight;
    }

    grid[maxWidth - 1] = { cards: numCards, height: overallHeight };

    console.log(`Cards ${numCards}, Overall height: ${overallHeight}`);
    column.dataset.col = maxWidth;
    if (!column.hasAttribute("id")) {
      column.setAttribute("id", `${maxWidth}`);
    }
    for (var i = 0; i < cards.length; i++) {
      cards[i].dataset.row = i + 1;
      cards[i].dataset.col = maxWidth;
      if (!cards[i].hasAttribute("id")) {
        cards[i].setAttribute("id", `${maxWidth}/${i + 1}`);
      }
    }
  });

  //Make the grid even
  for (var i = 0; i < grid.length; i++) {
    var column = startSelector.querySelectorAll(columnSelector)[i];
    if (grid[i].cards < maxCards) {
      const newTiles = maxCards - grid[i].cards;
      for (var n = 0; n < newTiles; n++) {
        //console.log(`Inserting at ${i + 1}/${grid[i].cards + 1 + n}, after ${grid[i]}`);
        var newCard = document.createElement(cardSelector);
        newCard.classList.add("__inserted");
        newCard.classList.add("card");
        newCard.dataset.row = grid[i].cards + 1 + n;
        newCard.dataset.col = i + 1;

        newCard.setAttribute("id", `${i + 1}/${grid[i].cards + 1 + n}`);
        var next;
        if (grid.length > i + 1) {
          next = `${i + 2}/1`;
        } else {
          next = "1/1";
        }
        newCard.dataset.jump = next;
        newCard.dataset.down = next;
        newCard.dataset.right = next;
        if (newTiles == n + 1) {
          //Last card
        }

        column.appendChild(newCard);
        grid[i].height = columnHeight(column);
      }
    }
    //Add navigation links
    function lookArround(id) {
      const next = document.getElementById(id);
      if (next != null && next.classList.contains("__inserted")) {
        return false;
      } else if (next == null) {
        console.log(`Next element for id ${id} is null!`);
        return false;
      }
      return true;
    }

    var cards = column.querySelectorAll(cardSelector);
    for (var j = 0; j < cards.length; j++) {
      if (cards[j].classList.contains("__inserted")) {
        continue;
      }
      if (j > 0) {
        const nextId = `${i + 1}/${j}`;
        cards[j].dataset.up = nextId;
      }
      if (j + 1 < cards.length) {
        const nextId = `${i + 1}/${j + 2}`;
        if (lookArround(nextId)) {
          cards[j].dataset.down = nextId;
        }
      } else if (j + 1 == cards.length && i + 1 < maxWidth) {
        const nextId = `${i + 2}/1`;
        if (lookArround(nextId)) {
          cards[j].dataset.down = nextId;
        }
        console.log(`Reached end for ${i}/${j} => ${nextId}`);
      }
      if (i + 1 < maxWidth) {
        const nextId = `${i + 2}/${j + 1}`;
        if (lookArround(nextId)) {
          cards[j].dataset.right = nextId;
        }
      }
      if (i > 0) {
        const nextId = `${i}/${j + 1}`;
        if (lookArround(nextId)) {
          cards[j].dataset.left = nextId;
        }
      }
    }
  }

  //Check for height differences
  if (
    window.getComputedStyle(startSelector).getPropertyValue("display") != "grid"
  ) {
    for (var k = 0; k < grid.length; k++) {
      if (grid[k].height < maxHeight) {
        var heightDiff = maxHeight - grid[k].height;
        var lastOfShort = startSelector
          .querySelectorAll(columnSelector)
          [k].querySelector(`${cardSelector}:last-child`);
        var oldHeight = lastOfShort.getBoundingClientRect().height;
        var newHeight = oldHeight + heightDiff;
        lastOfShort.style.height = `${newHeight}px`;
        //console.log(`column ${i + 1} has wrong height, is ${grid[i].height}, maximum is ${maxHeight}, setting height of ${lastOfShort.id} to ${newHeight}`);
      }
    }
  }
}

export function setupNav(selector) {
  if (selector === undefined) {
    for (const direction of directions) {
      selector += `nav.stack-switcher .${direction},`;
    }
    selector = selector.substring(0, selector.length - 1);
  }
  document.querySelectorAll(selector).forEach((arrow) => {
    arrow.classList.add("hidden");
  });
  //TODO: This doen't always work
  document.addEventListener("scroll", () => {
    document.querySelectorAll(selector).forEach((arrow) => {
      arrow.classList.add("hidden");
    });
  });
}
*/
// See https://www.sliderrevolution.com/resources/css-hamburger-menu/
export function setupLangSwitch(curLang, selector) {
  if (curLang === undefined || curLang == null || curLang == "") {
    curLang = document.querySelector("html").getAttribute("lang");
  }
  if (selector === undefined) {
    selector = "menu.lang-switch";
  }
  const switcher = document.querySelector(selector);
  const langLink = switcher.querySelector(".inactive");

  const waitExpanded = 1000;
  const waitCollapse = 10000;
  let clickTimer = null;
  let closeTimer = null;
  let tmpListener = null;

  // TODO: Remove zthsi, only for debug
  function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {}
  }

  const linkClickInterceptor = (e) => {
    e.preventDefault();
    console.log("Captured click");
  };

  function cancelClickInterceptor() {
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

  function reset() {
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

  const press = (e) => {
    function click() {
      switcher.classList.remove("pressed");
      console.log("Firing generated event");
      e.target.removeEventListener("click", linkClickInterceptor);
      const click = new CustomEvent("click");
      e.target.fireEvent(click);
    }

    e.preventDefault();
    e.stopImmediatePropagation();
    let link = e.target;
    console.log("Detected press");
    switcher.classList.add("pressed");
    tmpListener = click.bind(e.target);
    link.addEventListener("mouseup", tmpListener);
    link.addEventListener("touchcancel", tmpListener);

    clickTimer = setTimeout(longPress.bind(link), waitExpanded);
    return false;
  };

  function longPress() {
    this.removeEventListener("mouseup", tmpListener);
    this.removeEventListener("touchcancel", tmpListener);
    const clickInterceptorRemover = cancelClickInterceptor.bind(this);
    const mouseOut = () => {
      clickInterceptorRemover();
      console.log("mouse out");
    };
    this.addEventListener("mouseup", (e) => {
      e.preventDefault();
      clickInterceptorRemover();
      console.log("mouseup");
    });
    this.addEventListener("touchcancel", clickRemover);
    this.addEventListener("mouseout", mouseOut);

    //this.removeEventListener('click', linkClickInterceptor);
    let link = this;
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
    var content = lang.innerText || lang.textContent;
    if (content.toUpperCase() == curLang.toUpperCase()) {
      lang.classList.add("active");
    } else {
      lang.classList.add("inactive");
    }
  });
}

/*
export function textEffects() {
  const inViewEffects = {
    ".card .post-body": { class: "text-focus-in", duration: 1000 },
  };

  Object.keys(inViewEffects).forEach((sel) => {
    document.querySelectorAll(sel).forEach((fragment) => {
      inView(fragment, () => {
        fragment.classList.add(inViewEffects[sel].class);
        setTimeout(() => {
          fragment.classList.remove(inViewEffects[sel].class);
        }, inViewEffects[sel].duration);
      });
    });
  });
}

export function setupMenu() {
  document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", menuLinkHandler);
  });

  document
    .querySelector("input.burger-menu-button")
    .addEventListener("click", (e) => {
      if (e.target.checked && document.querySelector(".card.active") !== null) {
        e.target.dataset.caller = document.querySelector(".card.active").id;
        e.target.setAttribute("aria-expanded", "true");
        document.body.classList.add("noscroll");
      } else {
        e.target.setAttribute("aria-expanded", "false");
        document.body.classList.remove("noscroll");
        var active = document.getElementById(e.target.dataset.caller);
        if (active != null) {
          active.scrollIntoView({ behavior: "smooth" });
        } else {
          console.log("Last active card is null!");
        }
      }
    });
}

export function fontsLoaded() {
  var interval;
  var timeouts = [];

  function fontCheck() {
    if (document.fonts) {
      for (const font in fonts) {
        if (document.fonts.check(fonts[font])) {
          document.querySelector("body").classList.add(`${font}-loaded`);
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
        document.querySelector("body").classList.add(`${font}-loaded`);
      }, 3000),
    );
  }

  interval = setInterval(fontCheck, 200);
}
*/

/*
function scrollbarSizes () {
  const rootElement = document.documentElement;
  return [rootElement.offsetWidth - rootElement.clientWidth, rootElement.offsetHeight - rootElement.clientHeight];
}
*/

/*
export function checkColumns(root, columnSelector) {
  const startSelector = document.querySelector(root);
  const columns = startSelector.querySelectorAll(columnSelector).length;

  if (
    window.getComputedStyle(startSelector).getPropertyValue("display") == "grid"
  ) {
    const gridTemplate = window
      .getComputedStyle(startSelector)
      .getPropertyValue("grid-template-columns");

    if (gridTemplate.split(" ").length != columns) {
      const templateColumn = `repeat(${columns}, calc(100vw - 1rem))`;
      console.log(
        `Setting grid-template-column on ${root} to ${templateColumn}`,
      );
      startSelector.style.gridTemplateColumns = templateColumn;
    }
  }
  return columns;
}
*/
/*
export function checkWindowResize() {
  const cookieName = "hdr-notice";
  if (!checkHDR()) {
    console.log("Browser doesn't support HDR images!");
    if (Cookies.get(cookieName) == "true") {
      return;
    }
    document.querySelector("#hdr-warning").style.display = "block";
    document
      .querySelectorAll("#hdr-warning .close, #hdr-warning .button")
      .forEach((close) => {
        close.addEventListener("click", function () {
          Cookies.set(cookieName, "true", {
            expires: 7,
            path: "",
            sameSite: "Strict",
          });
          document.getElementById("hdr-warning").classList.add("hidden");
          return;
        });
      });
  }
}

export function checkWindowResize() {
  //TODO: Also check if window has been moved to another screen
  window.addEventListener("resize", () => {
    //TODO: Check if we need to recalculate more properties here
    console.log(`Resized window to ${window.innerWidth}x${window.innerHeight}`);
    // if (canvas !== null) {
    //   canvas.dispatchEvent(new Event(REDRAW_EVENT_NAME));
    // }
  });
}
*/
