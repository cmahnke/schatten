import { dispatchSwitch, ARRAY_SIZE, TOGGLE_EVENT_NAME } from "./model";

type EventType = "wheel" | "touch";

type Handler = {
  function: Function;
  args: Array<Element | string | number>;
};

type Handlers = {
  [TYPE in EventType]: Handler;
};

export const DEFAULT_HANDLERS: Handlers = {
  wheel: { function: handleWheel, args: [] },
  touch: { function: handleTouch, args: [] },
};

let lights = ARRAY_SIZE;
let last = ARRAY_SIZE;

export function addListener(
  canvas: HTMLCanvasElement,
  events: EventType | EventType[],
  handlers?: typeof DEFAULT_HANDLERS,
) {
  if (!handlers) {
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

export function handleWheel(canvas: HTMLCanvasElement) {
  canvas.addEventListener(
    "wheel",
    (e) => {
      const newLights = lights + e.deltaY * -0.05;
      if (newLights <= ARRAY_SIZE && newLights >= 0) {
        lights = newLights;
      }
      switchLEDs(canvas, lights);
      e.preventDefault();
    },
    //If this would be passive, we couldn't intercept the scroll event
    { passive: false },
  );
}

export function handleTouch(
  canvas: HTMLCanvasElement,
  touchIndicator: HTMLElement | null,
) {
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  if (isTouchDevice()) {
    if (touchIndicator) {
      touchIndicator.classList.remove("hide");
    }
    let startTouch: [number, number];
    let lastTouch: [number, number];
    const lastDirections: [boolean, boolean] = [false, false];
    const scale = 0.8;

    function getDirection(touch: Touch) {
      if (startTouch[0] < touch.pageX) {
        //right
        lastDirections[0] = true;
      } else {
        //left
        lastDirections[0] = false;
      }
      if (startTouch[1] < touch.pageY) {
        //down
        lastDirections[1] = true;
      } else {
        //up
        lastDirections[1] = false;
      }
    }

    canvas.addEventListener(
      "touchstart",
      (e: TouchEvent) => {
        e.preventDefault();
        const current = e.changedTouches[0];
        startTouch = [current.pageX, current.pageY];
        lastTouch = [current.pageX, current.pageY];
        if (touchIndicator) {
          touchIndicator.classList.add("hide");
        }
      },
      { passive: true },
    );

    function endTouch(e: TouchEvent) {
      e.preventDefault();
      startTouch = [NaN, NaN];
      if (touchIndicator) {
        touchIndicator.classList.remove("hide");
      }
    }

    canvas.addEventListener("touchcancel", endTouch);
    canvas.addEventListener("touchend", endTouch);

    canvas.addEventListener(
      "touchmove",
      (e: TouchEvent) => {
        const widthForLight = (canvas.clientWidth * scale) / ARRAY_SIZE;
        const current = e.changedTouches[0];
        lastTouch = [current.pageX, current.pageY];
        const distance = Math.sqrt(
          (lastTouch[0] - startTouch[0]) ** 2 +
            (lastTouch[1] - startTouch[1]) ** 2,
        );

        let newLights;
        getDirection(current);

        if (lastDirections[0]) {
          // || lastDirections[1]
          newLights = lights - distance / widthForLight;
        } else {
          newLights = lights + distance / widthForLight;
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
          startTouch = [current.pageX, current.pageY];
        }
        switchLEDs(canvas, lights);
      },
      { passive: true },
    );

    console.log("Touch events registered");
  } else {
    if (touchIndicator) {
      touchIndicator.classList.add("hide");
    }
  }
}

function switchLEDs(canvas: HTMLCanvasElement, num: number) {
  const iLightNum = Math.round(num);
  if (last != iLightNum) {
    dispatchSwitch(canvas, iLightNum);
    last = iLightNum;
  }
}

export function createSwitchGrid(elem: HTMLElement, canvas: HTMLCanvasElement) {
  const parent = document.createElement("div");
  parent.classList.add("dial");

  for (let i = 1; i < ARRAY_SIZE + 1; i++) {
    const button = document.createElement("button");
    button.classList.add("button");
    const span = document.createElement("span");
    span.innerText = i.toString();
    button.appendChild(span);
    button.addEventListener("click", () => {
      canvas.dispatchEvent(new CustomEvent(TOGGLE_EVENT_NAME, { detail: i }));
    });
    parent.appendChild(button);
  }
  elem.appendChild(parent);
}
