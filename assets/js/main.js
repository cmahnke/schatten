/*----- Imports -----*/
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
  colorSteps,
} from "../ts/card-grid.ts";
import {
  createSwitchGrid,
  addListener,
  DEFAULT_HANDLERS,
} from "../ts/model-switch-board.ts";
import {
  initModel,
  DEFAULT_SEPARATORS,
  DEFAULT_LAYOUTS,
  REDRAW_EVENT_NAME,
} from "../ts/model.ts";
import {  displayHDRWarning} from "../ts/hdr";
import { checkHDR } from "hdr-canvas";

const modelUrl = "/gtlf/model-uncompressed.glb";
const modelSelector = "#renderer";
let canvas;

/*----- Reexport -----*/

window.checkHDR = checkHDR;

/*----- Page functions -----*/

/*
window.addEventListener("load", (event) => {
  slider();
  links();
});
*/

document.addEventListener("DOMContentLoaded", function () {
  fontsLoaded();
  setupGrid(".cards", ".stack", "section");
  let observer = new IntersectionObserver(handleCardIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(colorSteps),
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
  canvas = document.querySelector(modelSelector);
  if (canvas !== null) {
    //initModel(canvas, modelUrl);
    initModel(canvas, modelUrl, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS);
    const handlers = DEFAULT_HANDLERS;
    handlers["touch"].args = [document.querySelector("#touch-indicator")];
    addListener(canvas, ["wheel", "touch"], handlers);
  }
  textEffects();

  if (window.location.hash !== "") {
    var id;
    var target = document.querySelector(
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

/*
function links() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href !== null && href.startsWith("#")) {
      console.log(href);
    } else if (href == null) {
      console.log("Link is missing href attribute: ", link);
    }
  });
}

function slider() {
  const inactive = document.querySelectorAll(".section.column.inactive");
  inactive.forEach((column) => {
    column.addEventListener(
      "click",
      (event) => {
        const active = document.querySelector(".section.column.active");
        event.currentTarget.classList.remove("inactive");
        event.currentTarget.classList.add("active");
        active.classList.remove("active");
        active.classList.add("inactive");
        slider();
      },
      { once: true },
    );
  });
}
*/
