console.warn("Running Vite prototype (from Source Files/Mocks/card-grid/assets/ts/main.ts)");


//import { initializeApp } from "../../../../../assets/ts/main.ts";
import "../../../../../assets/ts/main.ts";

/*
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});
*/

//await import("../../../../../assets/ts/main.ts");

/*
//Fonts
import "@fontsource-variable/handjet/full.css";
import "@fontsource/special-elite";
import "@fontsource-variable/figtree";

import Color from "color";

import {
  buildThresholdList,
  setupGrid,
  handleCardIntersect,
  setupNav,
  checkColumns,
  checkWindowResize,
  colorSteps,
  menuLinkHandler
} from "@hugo-assets/card-grid";
import { setupLangSwitch } from "@hugo-assets/lang";
import { textEffects, displayHDRWarning, fontsLoaded, setupMenu } from "@hugo-assets/util";
import { createSwitchGrid, addListener, DEFAULT_HANDLERS } from "@hugo-assets/model-switch-board";
import { initModel, DEFAULT_SEPARATORS, DEFAULT_LAYOUTS, REDRAW_EVENT_NAME } from "@hugo-assets/model";

const bgColor = new Color(getComputedStyle(document.body).getPropertyValue("--background-color"));
const modelUrl = "/gtlf/model-uncompressed.glb";
const modelSelector = "#renderer";
let canvas;

const fonts = {
  handjet: "1em Handjet",
  "special-elite": "1em Special Elite",
};

document.addEventListener("DOMContentLoaded", function () {
  fontsLoaded(fonts);
  setupGrid(".cards", ".stack", "section");
  const observer = new IntersectionObserver(handleCardIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(colorSteps)
  });
  setupNav();
  setupMenu(menuLinkHandler);
  setupLangSwitch();
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  checkColumns(".cards", ".stack");
  checkWindowResize();
  displayHDRWarning();
  canvas = document.querySelector(modelSelector)! as HTMLCanvasElement;
  if (canvas !== null) {
    //initModel(canvas, modelUrl);
    initModel(canvas, modelUrl, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS);
    const handlers = DEFAULT_HANDLERS;
    handlers["touch"].args = [document.querySelector("#touch-indicator")!];
    addListener(canvas, ["wheel", "touch"], handlers);
  }
  textEffects();

  if (window.location.hash !== "") {
    let id;
    const target = document.querySelector(`*[data-slug='${window.location.hash}']`);
    if (target !== null && "id" in target) {
      id = target.id;
    } else {
      id = window.location.hash;
    }
    console.log(`Init: Moving to ${id}`);
  }
});
*/
