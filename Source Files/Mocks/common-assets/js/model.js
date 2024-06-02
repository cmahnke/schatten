import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const ARRAY_SIZE = 9;
export const TOGGLE_EVENT_NAME = 'toggleLight';
export const SWITCH_EVENT_NAME = 'switchLights';
export const DEFAULT_SEPARATORS = {"landscape": [{
        }
      ], "portrait": [
        {
      }]};
export const DEFAULT_LAYOUTS = {"landscape": [{
        left: 0,
        bottom: 0,
        width: 3/4,
        height: 1.0,
        name: 'GroundView'
      }, {
        left: 3/4,
				bottom: 0,
				width: 1/4,
				height: 1.0,
        name: 'AllView'
      }
    ], "portrait": [
      {
        left: 0,
        bottom: 0,
        width: 1.0,
        height: 2/3,
        name: 'GroundView'
      }, {
        left: 0,
				bottom: 2/3,
				width: 1.0,
				height: 1/3,
        name: 'AllView'
    }]};

//TODO: Try to remove more global variables
let scene, renderer, views, dividers, cameraOrtho, sceneOrtho;

export function render() {
  var orientation = 'portrait';
  if (renderer.domElement.parentNode.clientWidth > renderer.domElement.parentNode.clientHeight) {
    orientation = 'landscape';
  }

  //const ratio = window.devicePixelRatio || 1;
  const parentWidth = renderer.domElement.parentNode.clientWidth;
  const parentHeight = renderer.domElement.parentNode.clientHeight;

  cameraOrtho.left = - parentWidth / 2;
	cameraOrtho.right = parentWidth / 2;
	cameraOrtho.top = parentHeight / 2;
	cameraOrtho.bottom = - parentHeight / 2;
	cameraOrtho.updateProjectionMatrix();

  for (let i = 0; i < views[orientation].length; ++ i) {
    if (views[orientation][i].camera === undefined) {
      continue;
    }

    const view = views[orientation][i];
    const camera = view.camera;

    const left = Math.floor(parentWidth * view.left);
    const bottom = Math.floor(parentHeight * view.bottom);
    const width = Math.floor(parentWidth * view.width);
    const height = Math.floor(parentHeight * view.height);

    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);
    renderer.setScissorTest(true);
    //renderer.setClearColor(view.background);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.clear();
    renderer.render(scene, camera);

    if (dividers !== null && orientation in dividers) {
      if (i + 1 < views[orientation].length) {
        const divider = dividers[orientation];
        setupDivider(divider, sceneOrtho);
      }
    }
  }

  //renderer.clear();


  renderer.clearDepth();

  //TODO: Remove this
  const helper = new THREE.CameraHelper(cameraOrtho);
  sceneOrtho.add(helper);


  const left = 0;
  const bottom = 0;
  const width = parentWidth;
  const height = parentHeight;
  renderer.setViewport(left, bottom, width, height);

  //TODO: This creates a artifact
  //renderer.render(sceneOrtho, cameraOrtho);
}

function setupDivider(divider, scene, width, height) {
  let sprites;
  if (divider.callback !== undefined || divider.callback !== null) {
    let args = [];
    if (divider.args !== undefined || divider.args !== null) {
      args = divider.args;
    }
    sprites = divider.callback(width, height, ...args);
  } else {
    sprites = dividers.sprite
  }

  if (Array.isArray(sprites)) {
    sprites.forEach((sprite) => {
      sceneOrtho.add(sprite);
  console.log('sprite', sprite, 'x', sprite.position.x, 'y', sprite.position.y, sprite.scale);
    });
  } else {
    scene.add(sprites);
  }
}

export function initModel(canvas, modelUrl, layouts, seperators, loadCallback) {
  if (canvas === null) {
    console.log('Model canvas is null!');
  }

  if (layouts === undefined || layouts === null) {
    views = DEFAULT_LAYOUTS;
  } else {
    views = layouts
  }

  if (seperators === undefined || seperators === null) {
    dividers = null;
  } else {
    dividers = seperators;
  }

  const loader = new GLTFLoader();

  scene = new THREE.Scene();

  loader.load(modelUrl,
    function (gltf) {
      const model = gltf.scene;

      gltf.scene.traverse((child) =>  {
        if (child.isMesh && !child.name.startsWith('Sphere')) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.side = THREE.DoubleSide;
        } else if (child.isLight) {
          child.intensity = 100;
          child.decay = 3.0;
          child.castShadow = true;
          child.shadow.bias = 0.0001;
        }
      });

      ['portrait', 'landscape'].forEach((orientation) => {
        for (let i = 0; i < views['landscape'].length; i++) {
          gltf.cameras.forEach((cam) => {
            if (cam.name == views.landscape[i].name) {
              renderer.compile(model, cam, scene);
              views[orientation][i].camera = cam;
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
  		console.log('An error happened', error);
  	}
  );

  // Add alpha: true for transparency
  renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
  const ratio = window.devicePixelRatio || 1;
	renderer.setPixelRatio(ratio);
  const parentWidth = renderer.domElement.parentNode.clientWidth;
  const parentHeight = renderer.domElement.parentNode.clientHeight;
  renderer.setSize(parentWidth, parentHeight);
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  renderer.autoClear = false;
  //renderer.setClearColor(0x000000, 0);

  // Used to render the seperator
  cameraOrtho = new THREE.OrthographicCamera( - parentWidth / 2, parentWidth / 2, parentHeight / 2, - parentHeight / 2, 1, 10);
	cameraOrtho.position.z = 10;
  sceneOrtho = new THREE.Scene();
  sceneOrtho.background = null;

  window.addEventListener("resize", () => {
    renderer.setSize(canvas.parentNode.clientWidth, canvas.parentNode.clientHeight);
    render();
  });

  renderer.domElement.addEventListener(TOGGLE_EVENT_NAME, (e) => {
    const light = e.detail;
    if (light > ARRAY_SIZE || light < 1) {
      return;
    }
    ['Spot', 'Sphere'].forEach((kind) => {
      const name = kind + String(light).padStart(3, '0');
      const obj = scene.getObjectByName(name);
      if (obj.visible == false) {
        obj.visible = true;
      } else {
        obj.visible = false;
      }
    });
    render();
  });

  renderer.domElement.addEventListener(SWITCH_EVENT_NAME, (e) => {
    const lights = e.detail;
    if (!Array.isArray(lights) || lights.length != ARRAY_SIZE) {
      return
    }
    for (let i = 1; i < ARRAY_SIZE + 1; i++) {
      const light = lights[i - 1];
      ['Spot', 'Sphere'].forEach((kind) => {
        const name = kind + String(i).padStart(3, '0');
        const obj = scene.getObjectByName(name);
        obj.visible = light;
      });
    }
    render();
  });
};

export function dispatchSwitch(canvas, num) {
  num = Math.round(num);
  var lightsSwitches = new Array(ARRAY_SIZE).fill(false);
  for (let i = 0; i < num; i++) {
    lightsSwitches[i] = true;
  }
  canvas.dispatchEvent(new CustomEvent(SWITCH_EVENT_NAME, {detail: lightsSwitches}));
}
