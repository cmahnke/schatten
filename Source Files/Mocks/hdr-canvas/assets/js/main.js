import {checkHDR , checkHDRCanvas} from './hdr-check';
import encodeHDR from './hdr-encode';
import {marked} from 'marked';

//See https://github.com/w3c/ColorWeb-CG/blob/main/hdr_html_canvas_element.md
/*
Possible values according to spec:
* "rec2100-hlg",
* "rec2100-pq",
* "rec2100-display-linear",

See also Chrome source https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/html/canvas/image_data_settings.idl

*/
const colorSpace = 'srgb-linear'; //'rec2100-pq'


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
  // https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/html/canvas/high_dynamic_range_options.idl
  //canvas.configureHighDynamicRange({mode:'extended'})


  const img = new Image(); // Create new img element
  img.src = "./public/images/white-hdr.jpeg";
  //img.src = './public/images/Desk_oBA2.jpg';
  const canvas = document.getElementById("canvas");
  //const ctx = canvas.getContext("2d", {colorSpace: "rec2100-hlg"});


  //https://issues.chromium.org/issues/40206688

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
  // Write status to DOM
  var status = document.getElementById('status');

  var hdrImage = document.createElement('div');
  var hdrCanvas = document.createElement('div');

  if (checkHDR()) {
    hdrImage.innerText = 'HDR Images are supported';
    hdrImage.style.color = 'green';
  } else {
    hdrImage.innerText = 'HDR Images are not supported';
    hdrImage.style.color = 'red';
  }

  if (checkHDRCanvas()) {
    hdrCanvas.innerText = 'HDR Canvas are supported';
    hdrCanvas.style.color = 'green';
  } else {
    hdrCanvas.innerText = 'HDR Canvas are not supported';
    hdrCanvas.style.color = 'red';
  }

  status.appendChild(hdrImage);
  status.appendChild(hdrCanvas);

});
