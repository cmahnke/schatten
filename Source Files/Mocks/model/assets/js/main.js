import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

import {initModel, dispatchSwitch, DEFAULT_LAYOUTS, ARRAY_SIZE, TOGGLE_EVENT_NAME} from '@/model';

const DEFAULT_HANDLERS = {'wheel': {function: handleWheel, args: []},
                          'touch': {function: handleTouch, args: []}};

const modelUrl = '/gtlf/model-uncompressed.glb';

const canvas = document.querySelector('#renderer');
const dial = document.querySelector('#dial-container');
const touchIndicator = document.querySelector('#touch-indicator');

createSwitchGrid(dial);
initModel(canvas, modelUrl, DEFAULT_LAYOUTS);
addListener(canvas, ['wheel', 'touch']);

let lights = ARRAY_SIZE;
let last = ARRAY_SIZE;

/*
function rectSeparator(w, h) {
	const rect= new THREE.Shape()
		.moveTo( 0, 0 )
		.lineTo( 0, h )
		.lineTo( w, h )
		.lineTo( w, 0 )
		.lineTo( 0, 0 );

  geometry = new THREE.ShapeGeometry(rect);

  mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: color, side: THREE.DoubleSide } ) );
  mesh.position.set( x, y, z - 125 );
	mesh.rotation.set( rx, ry, rz );
	mesh.scale.set( s, s, s );



  return mesh;
}
*/


export function addListener(canvas, events, handlers) {
  if (handlers === undefined || handlers === null) {
    handlers = DEFAULT_HANDLERS;
  }

  if (Array.isArray(events)) {
    events.forEach((event) => {
      handlers[event].function(canvas, ...handlers[event].args);
    });
  } else {
    handlers[events].function(canvas, ...handlers[events].args);
  }
}

export function handleWheel(canvas) {
  canvas.addEventListener("wheel", function(e) {
    const newLights = lights + e.deltaY * -0.05;
    if (newLights <= ARRAY_SIZE && newLights >= 0) {
      lights = newLights;
    }
    switchLEDs(canvas, lights);
    e.preventDefault();
  });
}

export function handleTouch(canvas, touchIndicator) {
  function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
  }

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
      if (touchIndicator != null) {
        touchIndicator.style.opacity = '0';
      }
    });

    canvas.addEventListener("touchcancel", function(e){
      e.preventDefault();
      startTouch = [];
      if (touchIndicator != null) {
        touchIndicator.style.opacity = '0';
      }
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
      switchLEDs(canvas, lights);

    });
    console.log('Touch events registred');
  }
}

//TODO: check if this is still needed
function switchLEDs(canvas, num) {
  const iLightNum = Math.round(num);
  if (last != iLightNum) {
    dispatchSwitch(canvas, iLightNum)
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
