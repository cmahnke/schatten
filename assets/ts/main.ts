/*----- Imports -----*/
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
  addListener,
  DEFAULT_HANDLERS,
} from "./model-switch-board";
import {
  initModel,
  DEFAULT_SEPARATORS,
  DEFAULT_LAYOUTS,
  REDRAW_EVENT_NAME,
} from "./model";

import { textEffects, displayHDRWarning, fontsLoaded, setupMenu, slider, processLinks } from "./util";
import { setupLangSwitch } from "./lang";

declare global {
  interface Window {
    checkHDR: Function;
  }
}

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

document.addEventListener("DOMContentLoaded", function () {
  slider();
  processLinks();
  let canvas: HTMLCanvasElement | null; 
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
    const hashValue = window.location.hash.replace("#", "");
    const target = document.querySelector(`*[data-slug='${hashValue}']`);
    if (target !== null && "id" in target) {
      id = target.id;
    } else {
      id = window.location.hash;
    }
    console.log(`Init: Moving to ${id}`);
  }
});


