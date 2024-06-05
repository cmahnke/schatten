import {checkHDR , checkHDRCanvas} from '@/hdr-check';
import encodeHDR from './hdr-encode';
import {marked} from 'marked';
import Color from 'colorjs.io';
import Uint16Image from './Uint16Image';

//See https://github.com/w3c/ColorWeb-CG/blob/main/hdr_html_canvas_element.md
/*
Possible values according to spec:
* "rec2100-hlg",
* "rec2100-pq",
* "rec2100-display-linear",

See also Chrome source https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/html/canvas/image_data_settings.idl

*/
const colorSpace = 'rec2100-hlg'; //'rec2100-pq'


function initHDRCanvas(canvas) {
  const ctx = canvas.getContext("2d", {colorSpace: colorSpace, pixelFormat:'float16'});
  return ctx;
}

function parseMarkdown() {
  document.querySelectorAll('*[data-markdown]').forEach((text) => {
    var content = text.textContent;
    var parsed = marked.parse(content);
    text.innerHTML = parsed;
  });
}

function hdrCanvasImage (parent, image) {
  //image.onload = () => {
    console.log('Image loaded');
    const offscreen = new OffscreenCanvas(image.width, image.height);
    const loadCtx = offscreen.getContext("2d");
    loadCtx.drawImage(image, 0, 0);
    const imData = loadCtx.getImageData(0, 0, image.width, image.height);
    console.log(imData);

    var hdrCanvas = document.createElement('canvas')
    hdrCanvas.configureHighDynamicRange({mode:'extended'});
    hdrCanvas.width = image.width;
    hdrCanvas.height = image.height;

    const rec210hglImage = Uint16Image.fromImageData(imData);

    console.log(rec210hglImage)

/*
    rec210hglImage.pixelCallback((r, g, b, a) => {
      return Uint16Array.from([r -1000, g+2000, b+1000, a]);
    });
*/

    const ctx = initHDRCanvas(hdrCanvas);
    ctx.putImageData(rec210hglImage.getImageData(), 0, 0);

    parent.appendChild(hdrCanvas);

  //}
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


  function colorFillBoxArrayUint16 (height, width, color) {
    const box = new Uint16Array(height * width * 4);
    for (var i = 0; i < box.length; i += 4) {
      box[i] = color[0];
      box[i + 1] = color[1];
      box[i + 2] = color[2];
      box[i + 3] = color[3];
    }
    return new ImageData(box, width, height, {colorSpace: colorSpace});
  }


  function whiteBoxArrayUint16 (height, width) {
    const box = new Uint16Array(height * width * 4);
    box.fill(2**16 - 1);
    return new ImageData(box, width, height, {colorSpace: colorSpace});
  }

  function whiteBoxArrayUint8Clamped (height, width) {
    const box = new Uint8ClampedArray(height * width * 4);
    box.fill(2**8 - 1);
    return new ImageData(box, width, height);
  }

  // Green box with pixels
  var imageObj = new Uint16Image(32, 32);
  imageObj.fill([0, 2**16 - 1, 0, 2**16 - 1]);
  imageObj.setPixel(0, 0, [2**16 - 1, 0, 0, 2**16 - 1]);
  imageObj.setPixel(1, 1, [2**16 - 1, 0, 0, 2**16 - 1]);
  //console.log(imageObj.getPixel(1, 1));
  var ioBox = imageObj.getImageData();
  console.log('Green', ioBox, imageObj);

  ctx.putImageData(ioBox, 130, 0);

  //var whiteObj = Uint16Image.fromImageData(whiteBoxArrayUint8Clamped(32, 32));
  //ctx.putImageData(whiteObj.getImageData(), 200, 0);
  //console.log('White', whiteObj)

  var box = whiteBoxArrayUint16(32, 32);
  console.log('HDR white', box);


  ctx.fillStyle = "color(display-p3 1 0 1)";
  ctx.fillRect(10,10,10,10)


  function uint8rgbaToUint16(val) {
    const cssColor = `rgba(${val[0]}, ${val[1]}, ${val[2]}, ${val[3]})`;
    var color = new Color(cssColor);
    console.log( cssColor, color.p3);
  }

  uint8rgbaToUint16([255, 255, 255, 255]);

  function uint8ToUint16(val) {
    //A bit better, based on whitepoint of .75, still not accurate
    return (val + 1 * .75) << 8;

/*
    int8_t hi = ((i >> 8) & 0xff);
    int8_t lo = ((i >> 0) & 0xff);
  */
    //This transfers linear, not really usable, except alpha
    //return ((val << 8) | val);
    // This only works for white, use to figure out transfer fuction
    //return val * 0xC2;
  }

  console.log(`Base 255 ${255 * 0xC2} -> ${255 << 0xFFC2}`);

  //console.log(new Color('srgb', [0, 255, 0]).to('rec2100'))
  //console.log(new Color('RGB', [255,0,0]).to('rec2100-hlg'));
  //var cBox = new Uint16Image(32, 32).fill([uint8ToUint16(0), 40000, 0, 2**16 - 1]).getImageData();
  var cBox = colorFillBoxArrayUint16(32, 32, [uint8ToUint16(0), uint8ToUint16(0), uint8ToUint16(128), 2**16 - 1]);

  //127 -> 30000
  //181 -> 40000

  console.log('shifted', cBox);
  ctx.putImageData(box, 33, 0);
  ctx.putImageData(cBox, 64, 0);

  var wBox = whiteBoxArrayUint8Clamped(32, 32)
  ctx.putImageData(wBox, 96, 0);

  const parent = document.querySelector('.test-image');
  const image = document.querySelector('.test-image .sdr');
  hdrCanvasImage(parent, image)

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

/*
function
for (var i = 0; i < this.data.length; i += 4) {
  this.data[i] = color[0];
  this.data[i + 1] = color[1];
  this.data[i + 2] = color[2];
  this.data[i + 3] = color[3];
}
*/

/* eslint-disable no-undef */
// See https://github.com/w3c/ColorWeb-CG/blob/main/hdr_html_canvas_element.md
function convertSRGBtoREC2100HLG(r, g, b) {

  /* Linearize using the sRGB EOTF */
  const r1 = srgb_eotf(r);
  const g1 = srgb_eotf(g);
  const b1 = srgb_eotf(b);

  /* convert color coordinates from sRGB to BT.2020 color space */
  const [r2, g2, b2] = matrixXYZtoBT2020(matrixSRGBtoXYZ(r1, g1, b1));

  /* Scale pixel values to match the HLG nominal peak luminance */
  const linearLightScaler = 80/302.2;
  const r3 = linearLightScaler * r2;
  const g3 = linearLightScaler * g2;
  const b3 = linearLightScaler * b2;

  /* apply HLG Inverse OOTF to obtain scene light values */
  const systemGamma = 1.001;
  const [r4, g4, b4] = hlg_inverse_ootf(r3, g3, b3, systemGamma);

  /* apply HLG OETF to obtain the non-linear HLG signal (see NOTE 1) */
  const [r5, g5, b5] = hlg_oetf(r4, g4, b4);

  return [r5, g5, b5]
}
/* eslint-enable no-undef */
