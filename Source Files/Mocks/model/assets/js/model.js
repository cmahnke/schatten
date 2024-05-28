import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const ARRAY_SIZE = 9;
export const SWITCH_EVENT_NAME = 'switchLight';

let camera, scene, renderer, gltf;

const views = {"landscape": [{
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
        bottom: 2/3,
        width: 1.0,
        height: 1/3,
        name: 'GroundView'
      }, {
        left: 0,
				bottom: 0,
				width: 1,
				height: 2/3,
        name: 'AllView'
    }]};

export function render() {
  for ( let ii = 0; ii < views['landscape'].length; ++ ii ) {
    if (views['landscape'][ii].camera === undefined) {
      continue;
    }

    const view = views['landscape'][ii];
    const camera = view.camera;

    const left = Math.floor( window.innerWidth * view.left );
    const bottom = Math.floor( window.innerHeight * view.bottom );
    const width = Math.floor( window.innerWidth * view.width );
    const height = Math.floor( window.innerHeight * view.height );

    renderer.setViewport( left, bottom, width, height );
    renderer.setScissor( left, bottom, width, height );
    renderer.setScissorTest( true );
    renderer.setClearColor( view.background );

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render( scene, camera );
  }
}

export function initModel(container, modelUrl) {
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

      for (let i = 0; i < views['landscape'].length; i++) {

        gltf.cameras.forEach((cam) => {
          if (cam.name == views.landscape[i].name) {
            renderer.compile(model, cam, scene);
            views['landscape'][i].camera = cam;
          }
        });
      }
      scene.add(model);

      render();
  	},
  	function ( xhr ) {
  		//console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  	},
  	function ( error ) {
  		console.log('An error happened', error);
  	}
  );

  const exposure = -1;
  renderer = new THREE.WebGLRenderer(  );//{ antialias: true }
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 1; //1; Math.pow(2, exposure)
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap; //PCFSoftShadowMap;

	container.appendChild( renderer.domElement );

  window.addEventListener("resize", (event) => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  });

  renderer.domElement.addEventListener(SWITCH_EVENT_NAME, (e) => {
    const light = e.detail;
    if (light > ARRAY_SIZE || light < 0) {
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
    })
    render();
  });
};
