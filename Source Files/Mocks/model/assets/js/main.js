import {initModel, ARRAY_SIZE, TOGGLE_EVENT_NAME, SWITCH_EVENT_NAME } from '@/model';

const modelUrl = '/gtlf/model-uncompressed.glb';

const canvas = document.querySelector('#renderer');
const dial = document.querySelector('#dial-container');

createSwitchGrid(dial);
initModel(canvas, modelUrl);

let lights = ARRAY_SIZE;
let last = ARRAY_SIZE;

canvas.addEventListener("wheel", function(e) {
  const newLights = lights + e.deltaY * -0.05;
  if (newLights <= ARRAY_SIZE && newLights >= 0) {
    lights = newLights;
  }
  dispathSwitch(lights)
  e.preventDefault();
});

if (isTouchDevice()) {
  let startTouch = [];
  let lastTouch = [];
  let lastDirections = new Array(2);
  const scale = .7;

  function getDirection() {
    if (startTouch[0] < lastTouch[0]) {
      //right
      lastDirections[0] = true;
    } else {
      //left
      lastDirections[0] = false;
    }
    if (startTouch[1] < lastTouch[1]) {
      //down
      lastDirections[1] = true;
    } else {
      //up
      lastDirections[1] = false;
    }
  }

  canvas.addEventListener("touchstart", function(e) {
    e.preventDefault();
    const current = e.changedTouches[0];
    startTouch = [parseInt(current.pageX), parseInt(current.pageY)];
    lastTouch = [parseInt(current.pageX), parseInt(current.pageY)];
  });

  canvas.addEventListener("touchcancel", function(e){
    e.preventDefault();
    startTouch = [];
  });

  canvas.addEventListener("touchmove", function(e){
    const widthForLight = (canvas.clientWidth *  scale) / ARRAY_SIZE;
    const current = e.changedTouches[0];
    lastTouch = [parseInt(current.pageX), parseInt(current.pageY)];
    const distance = Math.sqrt(((lastTouch[0] - startTouch[0])**2) + ((lastTouch[1] - startTouch[1])**2));

    var newLights;
    getDirection();
    if (lastDirections[0] || lastDirections[1]) {
      newLights = last - (distance / widthForLight);
    } else {
      newLights = last + (distance / widthForLight);
    }

    if (newLights < 0) {
      newLights = 0;
    }

    if (newLights <= ARRAY_SIZE && newLights >= 0) {
      lights = newLights;
    }

    if (last != Math.round(lights)) {
      startTouch = [parseInt(current.pageX), parseInt(current.pageY)];
    }

    console.log('dist', distance, (distance / widthForLight), 'last', last, 'nl', newLights);
    dispathSwitch(lights);

  });
  console.log('Touch events registred');
}

function dispathSwitch(num) {
  const iLightNum = Math.round(lights);
  if (last != iLightNum) {
    var lightsSwitches = new Array(ARRAY_SIZE).fill(false);
    for (let i = 0; i < iLightNum; i++) {
      lightsSwitches[i] = true;
    }
    canvas.dispatchEvent(new CustomEvent(SWITCH_EVENT_NAME, {detail: lightsSwitches}));
    last = iLightNum;
    console.log(`Setting lights to ${Math.round(iLightNum)}`);
  }
}

function createSwitchGrid(elem) {
  const parent = document.createElement("div");
  parent.classList.add('dial');

  for (let i = 1; i < ARRAY_SIZE + 1; i++) {
    const button =  document.createElement("button");
    button.classList.add('button');
    const span =  document.createElement("span");
    span.innerText = i;
    button.appendChild(span);
    button.addEventListener('click', (e) => {
      canvas.dispatchEvent(new CustomEvent(TOGGLE_EVENT_NAME, {detail: i}));
    });
    parent.appendChild(button)
  }
  elem.appendChild(parent);
}

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}
