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
  directions,
} from "./card-grid";
import type { Directions } from "./card-grid";
import { addListener, DEFAULT_HANDLERS } from "./model-switch-board";
import {
  initModel,
  DEFAULT_SEPARATORS,
  DEFAULT_LAYOUTS,
  REDRAW_EVENT_NAME,
} from "./model";

import {
  textEffects,
  displayHDRWarning,
  fontsLoaded,
  setupMenu,
  createMouseShadowEffect,
  slider,
  processLinks,
} from "./util";
import { setupLangSwitch } from "./lang";

declare global {
  interface Window {
    checkHDR: () => boolean;
  }
}

const pageTitleSelector = ".cards h1.post-title";
const fonts = {
  handjet: "1em Handjet",
  "special-elite": "1em Special Elite",
};
const modelUrl = "/gltf/model-uncompressed.glb";
const modelSelector = "#renderer";

/*----- Reexport -----*/

window.checkHDR = checkHDR || (() => false);

/*----- Page functions -----*/

/*
window.addEventListener("load", (event) => {

});
*/

console.log("Running main.ts");
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

export function initializeApp(): void {
  //slider();
  //processLinks();
  //let canvas: HTMLCanvasElement | null;
  fontsLoaded(fonts);
  console.log("Fonts loaded, setting up grid and observers");
  setupGrid(".cards", ".stack", "section");
  const observer = new IntersectionObserver(handleCardIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(colorSteps),
  });
  setupNav();
  setupMenu(menuLinkHandler);
  setupLangSwitch(window.location.origin);
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  checkColumns(".cards", ".stack");
  checkWindowResize();
  displayHDRWarning();
  createMouseShadowEffect(pageTitleSelector);
  const canvas = document.querySelector<HTMLCanvasElement>(modelSelector);
  if (canvas !== null) {
    initModel(canvas, modelUrl, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS);
    const handlers = DEFAULT_HANDLERS;
    const touchIndicator = document.querySelector(
      "#touch-indicator",
    ) as HTMLElement;
    if (touchIndicator !== null) {
      handlers["touch"].args = [touchIndicator];
    }
    addListener(canvas, ["wheel", "touch"], handlers);
  } else {
    console.error("Canvas element not found");
  }
  textEffects();

  if (directions.includes(window.location.hash.substring(1) as Directions)) {
    window.location.hash = "";
  }

  if (window.location.hash !== "") {
    let id: string;
    const hashValue = window.location.hash.replace("#", "");
    const target = document.querySelector(`*[data-slug='${hashValue}']`);
    if (target instanceof HTMLElement && target.id !== "") {
      id = target.id;
    } else {
      id = window.location.hash;
    }
    console.log(`Init: Moving to ${id}`);
  }
}
