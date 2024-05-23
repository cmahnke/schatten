import checkHDR from './hdr-check';
import encodeHDR from './hdr-encode';
import {marked} from 'marked';

const colorSpace = 'rec2100-pq'; //'rec2100-pq'


function parseMarkdown() {
  document.querySelectorAll('*[data-markdown]').forEach((text) => {
    var content = text.textContent;
    var parsed = marked.parse(content);
    text.innerHTML = parsed;
  });
}


/*
window.matchMedia("(dynamic-range: high)").matches
window.matchMedia('(color-gamut: p3)').matches
window.matchMedia('(color-gamut: rec2020)').matches

*/

function loadImage() {
  const img = new Image(); // Create new img element
  img.src = "./public/images/white-hdr.jpeg";
  const canvas = document.getElementById("canvas");
  //const ctx = canvas.getContext("2d", {colorSpace: "rec2100-hlg"});
  //configureHighDynamicRange

  /* See https://github.com/Fyrd/caniuse/issues/6504#issuecomment-1426886762 */
  const ctx = canvas.getContext("2d", {colorSpace: colorSpace, pixelFormat:'float16'});
  canvas.drawingBufferColorSpace = colorSpace;
  canvas.unpackColorSpace = colorSpace;

  //const ctx = canvas.getContext("2d");
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
}

document.addEventListener("DOMContentLoaded", function() {
  parseMarkdown();
  loadImage();
});
