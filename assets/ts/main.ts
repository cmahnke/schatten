/*----- Imports -----*/
import Color from "color";
import { checkHDR } from "hdr-canvas";

import {
  buildThresholdList,
  setupGrid,
  handleCardIntersect,
  setupNav,
  checkColumns,
  checkWindowResize,
  colorSteps,
  menuLinkHandler,
} from "./card-grid";
import {
  createSwitchGrid,
  addListener,
  DEFAULT_HANDLERS,
} from "./model-switch-board";
import {
  initModel,
  DEFAULT_SEPARATORS,
  DEFAULT_LAYOUTS,
  REDRAW_EVENT_NAME,
} from "./model";

import { textEffects } from "./effects";
import { displayHDRWarning } from "./hdr";
import { setupMenu } from "./menu";
import { setupLangSwitch } from "./lang";
import { fontsLoaded } from "./fonts";

declare global {
  interface Window {
    checkHDR: Function;
  }
}

const fonts = {
  handjet: "1em Handjet",
  "special-elite": "1em Special Elite",
};
const modelUrl = "/gtlf/model-uncompressed.glb";
const modelSelector = "#renderer";
let canvas: HTMLCanvasElement | null;

/*----- Reexport -----*/

window.checkHDR = checkHDR || {};

/*----- Page functions -----*/

/*
window.addEventListener("load", (event) => {
  slider();
  links();
});
*/

document.addEventListener("DOMContentLoaded", function () {
  fontsLoaded(fonts);
  setupGrid(".cards", ".stack", "section");
  const observer = new IntersectionObserver(handleCardIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(colorSteps),
  });
  setupNav();
  setupMenu(menuLinkHandler);
  setupLangSwitch(window.location.href);
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  checkColumns(".cards", ".stack");
  checkWindowResize();
  displayHDRWarning();
  canvas = document.querySelector(modelSelector);
  if (canvas !== null) {
    //initModel(canvas, modelUrl);
    initModel(canvas, modelUrl, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS);
    const handlers = DEFAULT_HANDLERS;
    const touchIndicator = document.querySelector(
      "#touch-indicator",
    ) as HTMLElement;
    if (touchIndicator !== null) {
      handlers["touch"].args = [touchIndicator];
    }
    addListener(canvas, ["wheel", "touch"], handlers);
  }
  textEffects();

  if (window.location.hash !== "") {
    let id: string;
    const target = document.querySelector(
      `*[data-slug='${window.location.hash}']`,
    );
    if (target !== null && "id" in target) {
      id = target.id;
    } else {
      id = window.location.hash;
    }
    console.log(`Init: Moving to ${id}`);
  }
});

export function links(): void {
  const links = document.querySelectorAll("a");
  links.forEach((link: HTMLElement) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      console.log(href);
    } else if (!href) {
      console.warn("Link is missing href attribute:", link);
    }
  });
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
