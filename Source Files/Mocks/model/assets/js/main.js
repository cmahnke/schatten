//import * as THREE from 'three';

import { initModel, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS } from "@/model";
import { createSwitchGrid, addListener, DEFAULT_HANDLERS } from "@/model-switch-board";

const modelUrl = "/gtlf/model-uncompressed.glb";

const canvas = document.querySelector("#renderer");
const dial = document.querySelector("#dial-container");

const handlers = DEFAULT_HANDLERS;
handlers["touch"].args = [document.querySelector("#touch-indicator")];

/*
separators['landscape'] = {callback: separatorVertical, args: [tile,
                            {width: 0, height: .8, left: 3/4, bottom: 0, distance: 12, rotateX: 35}
                          ]};
separators['portrait'] = {callback: separatorHorizontal, args: [tile,
                            {width: .9, height: 0, left: 0, bottom: 3/4, distance: 12, rotateX: 35}
                          ]};
*/

createSwitchGrid(dial, canvas);
initModel(canvas, modelUrl, DEFAULT_LAYOUTS, DEFAULT_SEPARATORS);
addListener(canvas, ["wheel", "touch"], handlers);
