# HDR Canvas

## Canvas

Seems to be not enabled at the moment:

- On Chrome navigate to [chrome://flags](chrome://flags/#enable-experimental-web-platform-features) and enable "Experimental Features"
- On Edge [edge://flags](edge://flags/#enable-experimental-web-platform-features) and enable "Experimental Features"

## AVIF Gain Map

Might need to be enabled:

- Chrome chrome://flags/#avif-gainmap-hdr-images

- [Proposal](https://github.com/w3c/ColorWeb-CG/blob/main/hdr_html_canvas_element.md)

## WebGL

- [HDR Sample](http://webglsamples.org/hdr/hdr.html)

## JS Libraries

- [`gainmap-js`](https://github.com/MONOGRID/gainmap-js)

## WASM

- [`libultrahdr-wasm`](https://github.com/MONOGRID/libultrahdr-wasm)

## Projects

- https://webglstudio.org/projects/hdr4eu/

## Tests

- https://www.wide-gamut.com/test/image-hdr

## Issues and trackers

- https://github.com/Fyrd/caniuse/issues/6504
- https://github.com/mrdoob/three.js/pull/27183

# Converter

- https://gainmap-creator.monogrid.com/
- JXL https://sturmen.github.io/posts/hdr-jpeg-xl-2022/

# Sample images

## HDR

- http://www.anyhere.com/gward/hdrenc/pages/originals.html
- https://github.com/AOMediaCodec/av1-avif/tree/master/testFiles/Netflix/avif

## SDR

- https://sipi.usc.edu/database/database.php?volume=misc&image=10#top

# Other

- https://stackoverflow.com/questions/51936897/how-does-one-create-and-display-hdr-images-in-web-browsers

# CSS HDR

- https://kidi.ng/wanna-see-a-whiter-white/

# Colorspace conversions

- https://russellcottrell.com/photo/matrixCalculator.htm

# TODO

- Check how to generate AVIF HDR
  - Test HDR AVIF on canvas
- Add HDR canvas test
  - Check how to map colors, maybe https://colorjs.io/docs/spaces
    - Thre are examples i the HDR Canvas draft
  - Create abstraction (get / set Pixel on Uint16 Array) - done
    - add color manipulations on abstraction
    - load ImageData Array
  - load image into Uint16 Array with color mapping
  - manipulate pixel intensity on Uint16

## `ffmpeg` conversions

- https://trac.ffmpeg.org/wiki/colorspace

# To check

- https://sturmen.github.io/posts/hdr-jpeg-xl-2022/
- https://github.com/mrdoob/three.js/pull/27183
- https://discuss.pixls.us/t/experimenting-with-hlg-and-hdr10-for-still-images/23361/45
