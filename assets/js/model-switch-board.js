import {dispatchSwitch, ARRAY_SIZE, TOGGLE_EVENT_NAME} from './model';

export const DEFAULT_HANDLERS = {'wheel': {function: handleWheel, args: []},
                          'touch': {function: handleTouch, args: []}};

let lights = ARRAY_SIZE;
let last = ARRAY_SIZE;

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
    if (touchIndicator != null) {
      touchIndicator.classList.remove('hide');
    }
    let startTouch = [];
    let lastTouch = [];
    let lastDirections = new Array(2);
    const scale = .8;

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
        touchIndicator.classList.add('hide');
      }
    });

    function endTouch(e) {
      e.preventDefault();
      startTouch = [];
      if (touchIndicator != null) {
        touchIndicator.classList.remove('hide');
      }
    }

    canvas.addEventListener("touchcancel", endTouch);
    canvas.addEventListener("touchend", endTouch);

    canvas.addEventListener("touchmove", function(e){
      const widthForLight = (canvas.clientWidth *  scale) / ARRAY_SIZE;
      const current = e.changedTouches[0];
      lastTouch = [parseInt(current.pageX), parseInt(current.pageY)];
      const distance = Math.sqrt(((lastTouch[0] - startTouch[0])**2) + ((lastTouch[1] - startTouch[1])**2));

      var newLights;
      getDirection();
      //
      if (lastDirections[0]) { // || lastDirections[1]
        newLights = lights - (distance / widthForLight);
      } else {
        newLights = lights + (distance / widthForLight);
      }

      if (newLights < 0) {
        newLights = 0;
      } else if (newLights > ARRAY_SIZE) {
        newLights = ARRAY_SIZE;
      }
      if (newLights <= ARRAY_SIZE && newLights >= 0) {
        lights = newLights;
      }

      if (last != Math.round(lights)) {
        startTouch = [parseInt(current.pageX), parseInt(current.pageY)];
      }
      switchLEDs(canvas, lights);

    });
    /* eslint-disable no-console */
    console.log('Touch events registred');
    /* eslint-enable no-console */
  } else {
    if (touchIndicator != null) {
      touchIndicator.classList.add('hide');
    }
  }
}

function switchLEDs(canvas, num) {
  const iLightNum = Math.round(num);
  if (last != iLightNum) {
    dispatchSwitch(canvas, iLightNum)
    last = iLightNum;
  }
}

export function createSwitchGrid(elem, canvas) {
  const parent = document.createElement("div");
  parent.classList.add('dial');

  for (let i = 1; i < ARRAY_SIZE + 1; i++) {
    const button =  document.createElement("button");
    button.classList.add('button');
    const span =  document.createElement("span");
    span.innerText = i;
    button.appendChild(span);
    button.addEventListener('click', () => {
      canvas.dispatchEvent(new CustomEvent(TOGGLE_EVENT_NAME, {detail: i}));
    });
    parent.appendChild(button)
  }
  elem.appendChild(parent);
}
