import {initModel, ARRAY_SIZE, SWITCH_EVENT_NAME } from './model';

const modelUrl = '/gtlf/model-uncompressed.glb';

const container = document.querySelector('#renderer');
const dial = document.querySelector('#dial-container');

createSwitchGrid(dial);
initModel(container, modelUrl);

function createSwitchGrid(elem) {
  const parent = document.createElement("div");
  parent.classList.add('dial');

  for (let i = 1; i < ARRAY_SIZE + 1; i++) {
    const button =  document.createElement("button");
    button.classList.add('button');
    button.innerText = i;
    button.addEventListener('click', (e) => {
      var canvas = container.querySelector('canvas');
      canvas.dispatchEvent(new CustomEvent(SWITCH_EVENT_NAME, {detail: i}));
    });
    parent.appendChild(button)
  }
  elem.appendChild(parent);
}
