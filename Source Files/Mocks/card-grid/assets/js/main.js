//Fonts
import "@fontsource-variable/handjet/full.css";
import "@fontsource/special-elite";
import "@fontsource-variable/figtree";

import Color from 'color';

import {fontsLoaded, buildThresholdList, setupGrid, handleCardIntersect, setupNav, setupMenu, setupLangSwitch, checkColumns, checkWindowResize, displayHDRWarning, textEffects, colorSteps} from '@/card-grid.js';
import {createSwitchGrid, addListener, DEFAULT_HANDLERS} from '@/model-switch-board.js';
import {initModel, DEFAULT_SEPARATORS, DEFAULT_LAYOUTS, REDRAW_EVENT_NAME} from '@/model.js';

const bgColor = new Color(getComputedStyle(document.body).getPropertyValue('--background-color'));
const modelUrl = '/gtlf/model-uncompressed.glb';
const modelSelector = '#renderer';
let canvas;

document.addEventListener("DOMContentLoaded", function() {
  fontsLoaded();
  setupGrid('.cards', '.stack', 'section');
  let observer = new IntersectionObserver(handleCardIntersect, {root: null, rootMargin: "0px", threshold: buildThresholdList(colorSteps)});
  setupNav();
  setupMenu();
  setupLangSwitch();
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
  checkColumns('.cards', '.stack');
  checkWindowResize();
  displayHDRWarning();
  canvas = document.querySelector(modelSelector);
  if (canvas !== null) {
    //initModel(canvas, modelUrl);
    initModel(canvas, modelUrl, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS);
    const handlers = DEFAULT_HANDLERS;
    handlers['touch'].args = [document.querySelector('#touch-indicator')];
    addListener(canvas, ['wheel', 'touch'], handlers);

  }
  textEffects();

  if (window.location.hash !== '') {
    var id;
    var target = document.querySelector(`*[data-slug='${window.location.hash}']`);
    if (target !== null && 'id' in target) {
      id = target.id;
    } else {
      id = window.location.hash;
    }
    console.log(`Init: Moving to ${id}`)
  }
});
