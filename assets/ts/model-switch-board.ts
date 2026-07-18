// schatten/assets/ts/model-switch-board.ts

import { dispatchSwitch, ARRAY_SIZE, TOGGLE_EVENT_NAME } from "./model";
// isTouchDevice uses (pointer: coarse) which matches the primary pointer device.
import { isTouchDevice } from "./util";

type EventType = "wheel" | "touch";

type Handler = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (canvas: HTMLCanvasElement, ...args: any[]) => void;
  args: unknown[];
};

type Handlers = {
  [TYPE in EventType]: Handler;
};

function makeSwitchLEDs(canvas: HTMLCanvasElement) {
  let last = ARRAY_SIZE;
  return function switchLEDs(num: number) {
    const iLightNum = Math.round(num);
    if (last !== iLightNum) {
      dispatchSwitch(canvas, iLightNum);
      last = iLightNum;
    }
  };
}

export function handleWheel(canvas: HTMLCanvasElement) {
  let lights = ARRAY_SIZE;
  const switchLEDs = makeSwitchLEDs(canvas);

  canvas.addEventListener(
    "wheel",
    (e) => {
      const pixelDelta =
        e.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? e.deltaY * 16
          : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? e.deltaY * 400
            : e.deltaY;

      const newLights = lights + pixelDelta * -0.05;

      // Clamp and store — lights stays fractional for sub-step sensitivity
      lights = Math.max(0, Math.min(ARRAY_SIZE, newLights));

      switchLEDs(lights);
      e.preventDefault();
    },
    { passive: false },
  );
}

export function handleTouch(
  canvas: HTMLCanvasElement,
  touchIndicator: HTMLElement | null,
) {
  if (isTouchDevice()) {
    if (touchIndicator) {
      touchIndicator.classList.remove("hide");
    }

    let lights = ARRAY_SIZE;
    const switchLEDs = makeSwitchLEDs(canvas);

    let startTouch: [number, number] = [NaN, NaN];
    const lastDirections: [boolean, boolean] = [false, false];
    const scale = 0.8;

    function getDirection(touch: Touch) {
      lastDirections[0] = startTouch[0] < touch.pageX; // true = right
      lastDirections[1] = startTouch[1] < touch.pageY; // true = down
    }

    canvas.addEventListener(
      "touchstart",
      (e: TouchEvent) => {
        e.preventDefault();
        const current = e.changedTouches[0];
        startTouch = [current.pageX, current.pageY];
        if (touchIndicator) {
          touchIndicator.classList.add("hide");
        }
      },
      { passive: false },
    );

    function endTouch(e: TouchEvent) {
      e.preventDefault();
      startTouch = [NaN, NaN];
      if (touchIndicator) {
        touchIndicator.classList.remove("hide");
      }
    }

    canvas.addEventListener("touchcancel", endTouch, { passive: false });
    canvas.addEventListener("touchend", endTouch, { passive: false });

    canvas.addEventListener(
      "touchmove",
      (e: TouchEvent) => {
        if (isNaN(startTouch[0])) return;

        const widthForLight = (canvas.clientWidth * scale) / ARRAY_SIZE;
        const current = e.changedTouches[0];

        const distance = Math.sqrt(
          (current.pageX - startTouch[0]) ** 2 +
            (current.pageY - startTouch[1]) ** 2,
        );

        getDirection(current);

        let newLights: number;
        if (lastDirections[0]) {
          newLights = lights - distance / widthForLight;
        } else {
          newLights = lights + distance / widthForLight;
        }

        newLights = Math.max(0, Math.min(ARRAY_SIZE, newLights));

        if (Math.round(newLights) !== Math.round(lights)) {
          startTouch = [current.pageX, current.pageY];
          lights = newLights;
        }

        switchLEDs(newLights);
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

export const DEFAULT_HANDLERS: Readonly<Handlers> = Object.freeze({
  wheel: Object.freeze({ fn: handleWheel, args: [] as unknown[] }),
  touch: Object.freeze({ fn: handleTouch, args: [] as unknown[] }),
});

export function addListener(
  canvas: HTMLCanvasElement,
  events: EventType | EventType[],
  handlers?: Handlers,
) {
  const resolvedHandlers: Handlers = handlers ?? DEFAULT_HANDLERS;

  if (Array.isArray(events)) {
    events.forEach((event) => {
      resolvedHandlers[event].fn(canvas, ...resolvedHandlers[event].args);
    });
  } else {
    resolvedHandlers[events].fn(canvas, ...resolvedHandlers[events].args);
  }
}

export function createSwitchGrid(elem: HTMLElement, canvas: HTMLCanvasElement) {
  elem.querySelector(".dial")?.remove();

  const parent = document.createElement("div");
  parent.classList.add("dial");

  for (let i = 1; i <= ARRAY_SIZE; i++) {
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
