import { dispatchSwitch, ARRAY_SIZE, TOGGLE_EVENT_NAME } from "./model";
// This seems to be true for the primary pointer device by using (pointer: coarse).
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

export function handleWheel(canvas: HTMLCanvasElement) {
  let lights = ARRAY_SIZE;
  let last = ARRAY_SIZE;

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
      if (newLights <= ARRAY_SIZE && newLights >= 0) {
        lights = newLights;
      }
      switchLEDs(canvas, lights);
      e.preventDefault();
    },
    { passive: false },
  );

  function switchLEDs(canvas: HTMLCanvasElement, num: number) {
    const iLightNum = Math.round(num);
    if (last !== iLightNum) {
      dispatchSwitch(canvas, iLightNum);
      last = iLightNum;
    }
  }
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
    let last = ARRAY_SIZE;

    let startTouch: [number, number] = [NaN, NaN];
    let lastTouch: [number, number] = [NaN, NaN];
    const lastDirections: [boolean, boolean] = [false, false];
    const scale = 0.8;

    function switchLEDs(canvas: HTMLCanvasElement, num: number) {
      const iLightNum = Math.round(num);
      if (last !== iLightNum) {
        dispatchSwitch(canvas, iLightNum);
        last = iLightNum;
      }
    }

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
        lastTouch = [current.pageX, current.pageY];
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
        // Guard against touchmove firing before touchstart
        if (isNaN(startTouch[0])) return;

        const widthForLight = (canvas.clientWidth * scale) / ARRAY_SIZE;
        const current = e.changedTouches[0];
        lastTouch = [current.pageX, current.pageY];

        const distance = Math.sqrt(
          (lastTouch[0] - startTouch[0]) ** 2 +
            (lastTouch[1] - startTouch[1]) ** 2,
        );

        getDirection(current);

        let newLights: number;
        if (lastDirections[0]) {
          // swiping right = decrease lights
          newLights = lights - distance / widthForLight;
        } else {
          // swiping left = increase lights
          newLights = lights + distance / widthForLight;
        }

        newLights = Math.max(0, Math.min(ARRAY_SIZE, newLights));

        // When the rounded value changes, reset the drag origin so each
        // "step" is relative — this is what gives the detent/click feel.
        // We update lights AFTER checking so the next drag segment starts
        // from the current position.
        if (last !== Math.round(newLights)) {
          startTouch = [current.pageX, current.pageY];
          lights = newLights;
        }

        switchLEDs(canvas, newLights);
      },
      // touchmove must stay passive: true so we don't block scrolling on
      // the rest of the page; we are not calling preventDefault() here
      { passive: true },
    );

    console.log("Touch events registered");
  } else {
    if (touchIndicator) {
      touchIndicator.classList.add("hide");
    }
  }
}

// Declared after functions to avoid forward-reference confusion
export const DEFAULT_HANDLERS: Handlers = {
  wheel: { fn: handleWheel, args: [] },
  touch: { fn: handleTouch, args: [] },
};

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
