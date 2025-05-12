import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type Orientation = "landscape" | "portrait";
type ViewNames = "GroundView" | "AllView";

type Square = {
  left: number;
  bottom: number;
  width: number;
  height: number;
};

type Layout = Square & {
  pxLeft: number;
  pxBottom: number;
  pxWidth: number;
  pxHeight: number;
  name: ViewNames;
  camera: THREE.Camera | THREE.PerspectiveCamera | undefined;
  raycaster: THREE.Raycaster | undefined;
  mouse: THREE.Vector2 | undefined;
};
type Layouts = {
  [ORIENTATION in Orientation]: Layout[];
};

type Tile = {
  material: THREE.SpriteMaterial;
  height: number;
  width: number;
};

type SeperatorArgs = Square & {
  distance: number;
  rotateX: number;
};

type Seperator = {
  callback: Function;
  args: [Tile, SeperatorArgs];
  sprite: undefined | THREE.Sprite[];
};

type Seperators = {
  [ORIENTATION in Orientation]: Seperator;
};

export const ARRAY_SIZE = 9;
export const TOGGLE_EVENT_NAME = "toggleLight";
export const SWITCH_EVENT_NAME = "switchLights";
export const REDRAW_EVENT_NAME = "redrawLights";

const tile: Tile = {
  material: loadTile("/images/Tile.svg"),
  height: 24,
  width: 24,
};

export const DEFAULT_SEPARATORS: Seperators = {
  landscape: {
    callback: separatorVertical,
    args: [
      tile,
      {
        width: 0,
        height: 0.8,
        left: 3 / 4,
        bottom: 0,
        distance: 12,
        rotateX: 35,
      } as SeperatorArgs,
    ],
    sprite: undefined,
  },
  portrait: {
    callback: separatorHorizontal,
    args: [
      tile,
      {
        width: 0.9,
        height: 0,
        left: 0,
        bottom: 3 / 4,
        distance: 12,
        rotateX: 35,
      } as SeperatorArgs,
    ],
    sprite: undefined,
  },
};
/*
      separators['landscape'] = {callback: separatorVertical, args: [tile,
                                  {width: 0, height: .8, left: 3/4, bottom: 0, distance: 12, rotateX: 35}
                                ]};
      separators['portrait'] = {callback: separatorHorizontal, args: [tile,
                                  {width: .9, height: 0, left: 0, bottom: 3/4, distance: 12, rotateX: 35}
                                ]};
*/

function defaultLayout(
  left = 0,
  bottom = 0,
  width = 0,
  height = 0,
  name = "GroundView",
): Layout {
  return {
    left: left,
    bottom: bottom,
    width: width,
    height: height,
    name: name,
    pxLeft: 0,
    pxBottom: 0,
    pxWidth: 0,
    pxHeight: 0,
    camera: undefined,
    raycaster: undefined,
    mouse: undefined,
  } as Layout;
}

export const DEFAULT_LAYOUTS: Layouts = {
  landscape: [
    defaultLayout(0, 0, 3 / 4, 1.0, "GroundView"),
    defaultLayout(3 / 4, 0, 1 / 4, 1.0, "AllView"),
  ],
  portrait: [
    defaultLayout(0, 0, 1.0, 2 / 3, "GroundView"),
    defaultLayout(0, 2 / 3, 1.0, 1 / 3, "AllView"),
  ],
};

let scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  views: Layouts,
  dividers: Seperators,
  sprites: THREE.Sprite[],
  cameraOrtho: THREE.OrthographicCamera,
  sceneOrtho: THREE.Scene,
  orientation: Orientation,
  arrow: THREE.ArrowHelper,
  rendererParent: HTMLElement;

export function render() {
  renderer.clear();
  orientation = "portrait";

  rendererParent = renderer.domElement.parentElement as HTMLElement;
  //const ratio = window.devicePixelRatio || 1;
  const parentWidth = rendererParent.clientWidth;
  const parentHeight = rendererParent.clientHeight;

  if (parentWidth > parentHeight) {
    orientation = "landscape";
  }

  cameraOrtho.left = -parentWidth / 2;
  cameraOrtho.right = parentWidth / 2;
  cameraOrtho.top = parentHeight / 2;
  cameraOrtho.bottom = -parentHeight / 2;
  cameraOrtho.updateProjectionMatrix();

  for (let i = 0; i < views[orientation].length; ++i) {
    if (views[orientation][i].camera === undefined) {
      continue;
    }

    const view = views[orientation][i];

    const left = Math.floor(parentWidth * view.left);
    const bottom = Math.floor(parentHeight * view.bottom);
    const width = Math.floor(parentWidth * view.width);
    const height = Math.floor(parentHeight * view.height);

    view.pxLeft = left;
    view.pxBottom = bottom;
    view.pxWidth = width;
    view.pxHeight = height;

    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);
    renderer.setScissorTest(true);
    //renderer.setClearColor(view.background);

    if (
      view.camera !== undefined &&
      view.camera instanceof THREE.PerspectiveCamera
    ) {
      view.camera.aspect = width / height;
      view.camera.updateProjectionMatrix();
      renderer.clear();
      renderer.render(scene, view.camera);
    }

    if (dividers !== null && orientation in dividers) {
      if (i + 1 < views[orientation].length) {
        const divider = dividers[orientation];
        setupDivider(divider, sceneOrtho, parentWidth, parentHeight);
      }
    }
  }

  renderer.clearDepth();

  //TODO: Remove this
  //const helper = new THREE.CameraHelper(cameraOrtho);
  //sceneOrtho.add(helper);

  renderer.setViewport(0, 0, parentWidth, parentHeight);
  renderer.setScissor(0, 0, parentWidth, parentHeight);
  renderer.setScissorTest(true);
  renderer.render(sceneOrtho, cameraOrtho);
}

//TODO: Finish setup of dividers
function setupDivider(
  divider: Seperator,
  scene: THREE.Scene,
  width: number,
  height: number,
) {
  while (sceneOrtho.children.length > 0) {
    sceneOrtho.remove(sceneOrtho.children[0]);
  }

  if (divider.callback !== undefined || divider.callback !== null) {
    if (divider.args !== undefined || divider.args !== null) {
      sprites = divider.callback(width, height, ...divider.args);
    } else {
      sprites = divider.callback(width, height);
    }
  } else if ("sprite" in divider && divider["sprite"] !== undefined) {
    sprites = divider.sprite;
  } else {
    console.log("Divider sprite or callback not set!");
    return;
  }

  sprites.forEach((sprite) => {
    if (sprite !== undefined && sprite !== null) {
      sceneOrtho.add(sprite);
    } else {
      console.log("Sprite is undefined or null!");
    }
  });
}

export function initModel(
  canvas: HTMLCanvasElement,
  modelUrl: string,
  layouts: Layouts,
  seperators: Seperators,
  loadCallback?: Function,
) {
  if (canvas === null) {
    console.log("Model canvas is null!");
  }

  if (layouts === undefined || layouts === null) {
    views = DEFAULT_LAYOUTS;
  } else {
    views = layouts;
  }

  if (seperators !== undefined || seperators !== null) {
    dividers = seperators;
  }

  const loader = new GLTFLoader();

  scene = new THREE.Scene();

  loader.load(
    modelUrl,
    function (gltf) {
      const model = gltf.scene;

      gltf.scene.traverse((child: THREE.Object3D) => {
        if (
          child instanceof THREE.Mesh &&
          child.isMesh &&
          !child.name.startsWith("Sphere")
        ) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.side = THREE.DoubleSide;
        } else if (child instanceof THREE.SpotLight && child.isLight) {
          child.intensity = 100;
          child.decay = 3.0;
          child.castShadow = true;
          child.shadow.bias = 0.0001;
        }
      });

      (["portrait", "landscape"] as Orientation[]).forEach((direction) => {
        for (let i = 0; i < views[direction].length; i++) {
          gltf.cameras.forEach((cam: THREE.Camera) => {
            if (cam.name == views[direction][i].name) {
              renderer.compile(model, cam, scene);
              views[direction][i].camera = cam;
              views[direction][i].raycaster = new THREE.Raycaster();
              views[direction][i].mouse = new THREE.Vector2(1, 1);
            }
          });
        }
      });
      scene.add(model);

      render();
      if (loadCallback !== undefined) {
        loadCallback();
      }
    },
    function (xhr) {
      //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function (error) {
      console.log("An error happened", error);
    },
  );

  // Add alpha: true for transparency
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  const ratio = window.devicePixelRatio || 1;
  renderer.setPixelRatio(ratio);
  if (renderer.domElement.parentElement instanceof HTMLElement)
    rendererParent = renderer.domElement.parentElement;

  const parentWidth = rendererParent.clientWidth;
  const parentHeight = rendererParent.clientHeight;
  renderer.setSize(parentWidth, parentHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  renderer.autoClear = false;
  //renderer.setClearColor(0x000000, 0);

  // Used to render the seperator
  cameraOrtho = new THREE.OrthographicCamera(
    -parentWidth / 2,
    parentWidth / 2,
    parentHeight / 2,
    -parentHeight / 2,
    1,
    10,
  );
  cameraOrtho.position.z = 10;
  sceneOrtho = new THREE.Scene();
  sceneOrtho.background = null;
  sceneOrtho.add(cameraOrtho);

  window.addEventListener("resize", () => {
    if (canvas.parentElement != null) {
      renderer.setSize(
        canvas.parentElement.clientWidth,
        canvas.parentElement.clientHeight,
      );
    }
    render();
  });

  function mouseHandler(e: MouseEvent) {
    e.preventDefault();
    const eTarget = e.target as HTMLElement;

    for (let i = 0; i < views[orientation].length; i++) {
      const view = views[orientation][i];
      if (view.mouse === undefined) {
        return;
      }
      const mouse: THREE.Vector2 = view.mouse;
      const canvasRect = eTarget.getBoundingClientRect();

      const canvasMouse = {
        x: e.clientX - canvasRect.left,
        y: e.clientY - canvasRect.top,
      };

      // Check if we are in the correct camera
      if (
        canvasMouse.x < view.pxLeft ||
        canvasMouse.x > view.pxWidth + view.pxLeft ||
        canvasMouse.y > canvasRect.height - view.pxBottom ||
        canvasMouse.y < canvasRect.height - (view.pxBottom + view.pxHeight)
      ) {
        //console.log(`Currently not in camera ${view.name}`);
        continue;
      }

      const camaraMouse = {
        x: canvasMouse.x - view.pxLeft,
        y:
          canvasMouse.y - (canvasRect.height - (view.pxBottom + view.pxHeight)),
      };

      mouse.x = (camaraMouse.x / view.pxWidth) * 2 - 1;
      mouse.y = -(camaraMouse.y / view.pxHeight) * 2 + 1;

      const raycaster = views[orientation][i].raycaster;
      raycaster?.setFromCamera(
        mouse,
        views[orientation][i].camera as THREE.Camera,
      );

      if ("debug" in view && view.debug) {
        if (arrow !== null) {
          scene.remove(arrow);
        }
        arrow = new THREE.ArrowHelper(
          raycaster?.ray.direction,
          raycaster?.ray.origin,
          2,
          0xffff00,
        );
        scene.add(arrow);
        render();
      }

      for (let i = 1; i < ARRAY_SIZE + 1; i++) {
        const name = "Sphere" + String(i).padStart(3, "0");
        const obj = scene.getObjectByName(name);
        if (obj !== undefined) {
          const intersects = raycaster?.intersectObject(obj, true);

          if (intersects !== undefined && intersects.length > 0) {
            //console.log(`Get intersection for ${name}`);
            toggleNo(i);
            render();
          }
        }
      }
    }
  }

  renderer.domElement.addEventListener("click", mouseHandler, false);

  renderer.domElement.addEventListener(TOGGLE_EVENT_NAME, ((
    e: CustomEvent<number>,
  ) => {
    const light: number = e.detail;
    if (light > ARRAY_SIZE || light < 1) {
      return;
    }
    toggleNo(light);
    render();
  }) as (e: Event) => void);

  renderer.domElement.addEventListener(SWITCH_EVENT_NAME, ((
    e: CustomEvent<boolean[]>,
  ) => {
    const lights: boolean[] = e.detail;
    if (!Array.isArray(lights) || lights.length != ARRAY_SIZE) {
      return;
    }
    for (let i = 1; i < ARRAY_SIZE + 1; i++) {
      const light = lights[i - 1];
      ["Spot", "Sphere"].forEach((kind) => {
        const name = kind + String(i).padStart(3, "0");
        const obj = scene.getObjectByName(name);
        if (obj !== undefined) {
          obj.visible = light;
        }
      });
    }
    render();
  }) as (e: Event) => void);

  renderer.domElement.addEventListener(REDRAW_EVENT_NAME, () => {
    render();
  });
  //canvas.scene = scene;
}

function toggleNo(light: number) {
  ["Spot", "Sphere"].forEach((kind) => {
    const name = kind + String(light).padStart(3, "0");
    const obj: THREE.Object3D | undefined = scene.getObjectByName(name);
    if (obj !== undefined) {
      if (obj.visible == false) {
        obj.visible = true;
      } else {
        obj.visible = false;
      }
    }
  });
}

export function dispatchSwitch(canvas: HTMLCanvasElement, num: number) {
  num = Math.round(num);
  const lightsSwitches = new Array(ARRAY_SIZE).fill(false);
  for (let i = 0; i < num; i++) {
    lightsSwitches[i] = true;
  }
  canvas.dispatchEvent(
    new CustomEvent(SWITCH_EVENT_NAME, { detail: lightsSwitches }),
  );
}

export function separatorVertical(
  width: number,
  height: number,
  tile: Tile,
  size: SeperatorArgs,
) {
  const tiles: THREE.Sprite[] = [];
  let tileHeight;
  if (size.rotateX) {
    tileHeight = tile.height * size.rotateX * (Math.PI / 180);
  } else {
    tileHeight = tile.height;
  }
  const numY = Math.floor(
    (height * size.height) / (tileHeight + size.distance),
  );

  const posX = width * size.left - tile.width / 2;
  const startY = Math.floor((height - height * size.height) / 2);
  for (let i = 0; i < numY; i++) {
    const sprite = new THREE.Sprite(tile.material);
    const posY = i * (tileHeight + size.distance) + startY;
    sprite.center.set(0.0, -1.0);
    sprite.scale.set(tile.width, tileHeight, 1);
    sprite.position.set(...translateOrtho(width, height, posX, posY), 1);
    tiles.push(sprite);
  }
  return tiles;
}

export function separatorHorizontal(
  width: number,
  height: number,
  tile: Tile,
  size: SeperatorArgs,
) {
  const tiles: THREE.Sprite[] = [];
  let tileHeight;
  if (size.rotateX) {
    tileHeight = tile.height * size.rotateX * (Math.PI / 180);
  } else {
    tileHeight = tile.height;
  }
  const numX = Math.floor((width * size.width) / (tile.width + size.distance));
  const posY = height * size.bottom - tileHeight / 2;
  const startX = Math.floor((width - width * size.width) / 2);

  for (let i = 0; i < numX; i++) {
    const sprite = new THREE.Sprite(tile.material);
    const posX = i * (tileHeight + size.distance) + startX;
    sprite.center.set(-2.0, 2.0);
    sprite.scale.set(tile.width, tileHeight, 1);
    sprite.position.set(...translateOrtho(width, height, posX, posY), 1);
    tiles.push(sprite);
  }
  return tiles;
}

function translateOrtho(
  width: number,
  height: number,
  x: number,
  y: number,
): [number, number] {
  return [-(width / 2) + x, -(height / 2) + y];
}

export function loadTile(tileUrl: string) {
  const map = new THREE.TextureLoader().load(tileUrl);
  map.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: map,
    color: 0xffffff,
    fog: true,
  });
  return material;
}
