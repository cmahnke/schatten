//Fonts
import "@fontsource-variable/handjet/full.css";
import "@fontsource/special-elite";
import "@fontsource-variable/figtree";

import Color from "color";

import {
  fontsLoaded,
  buildThresholdList,
  setupGrid,
  handleCardIntersect,
  setupNav,
  setupMenu,
  checkColumns,
  checkWindowResize,
  textEffects,
  colorSteps
} from "@hugo-assets/card-grid";
import { setupLangSwitch } from "@hugo-assets/lang";
import { displayHDRWarning } from "@hugo-assets/hdr";
import { createSwitchGrid, addListener, DEFAULT_HANDLERS } from "@hugo-assets/model-switch-board";
import { initModel, DEFAULT_SEPARATORS, DEFAULT_LAYOUTS, REDRAW_EVENT_NAME } from "@hugo-assets/model";

const bgColor = new Color(getComputedStyle(document.body).getPropertyValue("--background-color"));
const modelUrl = "/gtlf/model-uncompressed.glb";
const modelSelector = "#renderer";
let canvas;

document.addEventListener("DOMContentLoaded", function () {
  fontsLoaded();
  setupGrid(".cards", ".stack", "section");
  const observer = new IntersectionObserver(handleCardIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(colorSteps)
  });
  setupNav();
  setupMenu();
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
