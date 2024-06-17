import * as THREE from 'three';

import {initModel, separatorVertical, separatorHorizontal, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS} from '@/model';
import {createSwitchGrid, addListener, DEFAULT_HANDLERS} from '@/model-switch-board';

const modelUrl = '/gtlf/model-uncompressed.glb';
const tileUrl = '/images/Tile.svg';

const canvas = document.querySelector('#renderer');
const dial = document.querySelector('#dial-container');

const handlers = DEFAULT_HANDLERS;
handlers['touch'].args = [document.querySelector('#touch-indicator')];

const tile = { material: loadTile(tileUrl),
               height: 24,
               width: 24};

const separators = DEFAULT_SEPARATORS;
separators['landscape'] = {callback: separatorVertical, args: [tile,
                            {width: 0, height: .8, left: 3/4, bottom: 0, distance: 12, rotateX: 35}
                          ]};
separators['portrait'] = {callback: separatorHorizontal, args: [tile,
                            {width: .9, height: 0, left: 0, bottom: 3/4, distance: 12, rotateX: 35}
                          ]};

//console.log(separators)

createSwitchGrid(dial, canvas);
initModel(canvas, modelUrl, DEFAULT_LAYOUTS, separators);
addListener(canvas, ['wheel', 'touch'], handlers);

function loadTile(tileUrl) {
  var map = new THREE.TextureLoader().load(tileUrl);
  map.colorSpace = THREE.SRGBColorSpace;
  var material = new THREE.SpriteMaterial({ map: map, color: 0xffffff, fog: true });
  return material;
}

/*
function separatorVertical(width, height, tile, size) {
  const tiles = []
  let tileHeight;
  if (size.rotateX) {
    tileHeight = (tile.height * size.rotateX) * (Math.PI/180);
  } else {
    tileHeight = tile.height;
  }
  const numY = Math.floor((height * size.height) / (tileHeight + size.distance));

  const posX = width * size.left - (tile.width / 2);
  const startY = Math.floor((height - (height * size.height)) / 2);
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

function separatorHorizontal(width, height, tile, size) {
  const tiles = []
  let tileHeight;
  if (size.rotateX) {
    tileHeight = (tile.height * size.rotateX) * (Math.PI/180);
  } else {
    tileHeight = tile.height;
  }
  const numX = Math.floor((width * size.width) / (tile.width + size.distance));
  const posY = height * size.bottom - (tileHeight / 2);
  const startX = Math.floor((width - (width * size.width)) / 2);

  for (let i = 0; i < numX; i++) {
    const sprite =  new THREE.Sprite(tile.material);
    const posX = i * (tileHeight + size.distance) + startX;
    sprite.center.set(-2.0, 2.0);
    sprite.scale.set(tile.width, tileHeight, 1);
    sprite.position.set(...translateOrtho(width, height, posX, posY), 1);
    tiles.push(sprite);
  }
  return tiles;
}

function translateOrtho(width, height, x, y) {
  return [ - (width / 2) + x, - (height / 2) + y];
}
*/
