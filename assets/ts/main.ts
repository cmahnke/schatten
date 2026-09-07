// schatten/assets/ts/main.ts
import { checkHDR } from "hdr-canvas";

import {
  buildThresholdList,
  setupGrid,
  handleCardIntersect,
  setupNav,
  checkColumns,
  checkWindowResize,
  checkScrollSettle,
  setupScrollNav,
  scrollToCard,
  colorSteps,
  menuLinkHandler,
  isDirection,
  findTarget,
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

const GRID_ROOT = ".cards";
const GRID_COLUMN = ".stack";
const GRID_CARD = "section";

/*----- Reexport -----*/
window.checkHDR = checkHDR;

document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

export function initializeApp(): void {
  console.log("Initializing app");
  //slider();
  fontsLoaded(fonts);
  console.log("Fonts loaded, setting up grid and observers");
  setupGrid(GRID_ROOT, GRID_COLUMN, GRID_CARD);
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
  checkColumns(GRID_ROOT, GRID_COLUMN);
  checkWindowResize(GRID_ROOT, GRID_COLUMN, GRID_CARD);
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

  // Navigation: strip directional hashes left over from keyboard helpers,
  // then handle deep links and the initial active card
  const initialHash = window.location.hash.substring(1);
  if (isDirection(initialHash)) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }

  setupScrollNav();

  const hashValue = window.location.hash.substring(1);
  if (hashValue !== "") {
    const target = findTarget(hashValue);
    if (target instanceof HTMLElement) {
      console.log(`Init: Moving to ${target.id || hashValue}`);
      // Card positions shift when fonts are loaded, wait for them before
      // scrolling to the deep link target
      document.fonts.ready.then(() => {
        scrollToCard(target, "instant");
        checkScrollSettle();
      });
    } else {
      console.error(`Init: No target found for hash '${hashValue}'`);
    }
  } else {
    checkScrollSettle();
  }
}
