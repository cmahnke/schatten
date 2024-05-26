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
const colorSpace = 'rec2100-hlg'; //'rec2100-pq'


function parseMarkdown() {
  document.querySelectorAll('*[data-markdown]').forEach((text) => {
    var content = text.textContent;
    var parsed = marked.parse(content);
    text.innerHTML = parsed;
  });
}


/*
// TODO: Add this to check / detection
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
  if (checkHDRCanvas()) {
    canvas.configureHighDynamicRange({mode:'extended'});
  } else {
    console.debug('hdr not supported');
    return;
  }
  //const ctx = canvas.getContext("2d", {colorSpace: "rec2100-hlg"});


  //https://issues.chromium.org/issues/40206688
  canvas.configureHighDynamicRange({mode:'extended'});
  /* See https://github.com/Fyrd/caniuse/issues/6504#issuecomment-1426886762 */
  const ctx = canvas.getContext("2d", {colorSpace: colorSpace, pixelFormat:'float16'});
  //The next two aren't defined
  //canvas.drawingBufferColorSpace = colorSpace;
  //canvas.unpackColorSpace = colorSpace;

  ctx.imageSmoothingEnabled = false;

  //const ctx = canvas.getContext("2d");
  var canvasArray;

  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    //{colorSpace: colorSpace, pixelFormat:'float32'}
    canvasArray = ctx.getImageData(0, 0, 33, 33);
    console.log(canvasArray);
  };


  function whiteBoxArrayUint16 (height, width) {
    const box = new Uint16Array(height * width * 4);
    for (let w = 0; w < width; w++) {
      for (let h = 0; h < height; h++) {
        box[w * h] = 2**16 - 1;
        box[w * h + 1] = 2**16 - 1;
        box[w * h + 2] = 2**16 - 1;
        box[w * h + 3] = 2**16 - 1;
        //console.log(`Written w${w}, h${h}`)
      }
    }
    return new ImageData(box, width, height, {colorSpace: colorSpace});
  }


  function whiteBoxArrayUint8Clamped (height, width) {
    const box = new Uint8ClampedArray(height * width * 4);
    for (let w = 0; w < width; w++) {
      for (let h = 0; h < height; h++) {
        box[w * h] = 255;
        box[w * h + 1] = 255;
        box[w * h + 2] = 255;
        box[w * h + 3] = 255;

      }
    }
    return new ImageData(box, width, height, {colorSpace: colorSpace});
  }

  var box = whiteBoxArrayUint16(32, 32);
  ctx.putImageData(box, 33, 0);
/*
  ctx.beginPath();
  ctx.rect(30, 30, 64, 64);
  ctx.fill();
*/




}

function addStatus () {
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
}

document.addEventListener("DOMContentLoaded", function() {
  parseMarkdown();
  loadImage();
  addStatus();

});
