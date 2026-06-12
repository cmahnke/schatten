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
  isDirection,
} from "./card-grid";
import { addListener, DEFAULT_HANDLERS } from "./model-switch-board";
import { initModel, DEFAULT_SEPARATORS, DEFAULT_LAYOUTS } from "./model";

import {
  textEffects,
  displayHDRWarning,
  fontsLoaded,
  setupMenu,
  createMouseShadowEffect,
  slider,
} from "./util";
import { setupLangSwitch } from "./lang";

declare global {
  interface Window {
    checkHDR: () => boolean;
  }
}

const pageTitleSelector = ".cards h1.post-title";
export const fonts = {
  handjet: "1em Handjet",
  "special-elite": "1em Special Elite",
};
const modelUrl = "/gltf/model-uncompressed.glb";
const modelSelector = "#renderer";

/*----- Reexport -----*/
window.checkHDR = checkHDR || (() => false);

document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

export function initializeApp(): void {
  console.log("Initializing app");
  //slider();
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

    const touchIndicator =
      document.querySelector<HTMLElement>("#touch-indicator");
    const handlers = {
      ...DEFAULT_HANDLERS,
      touch: { ...DEFAULT_HANDLERS.touch, args: [touchIndicator] },
    };
    addListener(canvas, ["wheel", "touch"], handlers);
  } else {
    console.error("Canvas element not found");
  }
  textEffects();

  if (isDirection(window.location.hash.substring(1))) {
    window.location.hash = "";
  }

  if (window.location.hash !== "") {
    let id: string;
    const hashValue = window.location.hash.substring(1);
    const target = document.querySelector(`*[data-slug='${hashValue}']`);
    if (target instanceof HTMLElement && target.id !== "") {
      id = target.id;
    } else {
      id = window.location.hash;
    }
    console.log(`Init: Moving to ${id}`);
  }
}
