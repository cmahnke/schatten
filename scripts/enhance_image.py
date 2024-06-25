#!/usr/bin/env python

import sys, os, logging, argparse, pathlib, subprocess, io, atexit, shutil, logging
from PIL import Image
import numpy as np
import cv2 as cv
from termcolor import cprint
import ffmpeg

#TODO: Make `ultrahdr_app` call configurable to support docker

# See also https://github.com/albertz/playground/blob/master/ultrahdr.py

ultrahdr_app_bin = '/usr/local/bin/ultrahdr_app'

pipeline = ['grayscale', 'denoise', 'white_balance', 'normalize']
#pipeline = ['grayscale', 'white_balance']

logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
logger = logging.getLogger(__name__)

def normalize(img):
    #cvAr = greyscale(pilImg)
    norm = cv.normalize(src=img, dst=None, beta=0, alpha=255, norm_type=cv.NORM_MINMAX)
    return norm

def grayscale(img):
    return cv.cvtColor(img, cv.COLOR_BGR2GRAY)

def denoise(img):
    return cv.fastNlMeansDenoising(img)

def smoothen(img):
    return cv.bilateralFilter(cvAr, 25, 75, 75)

def safe_yuv(img, name):
    if len(img.shape) < 3:
        img = cv.cvtColor(img, cv.COLOR_GRAY2BGR)
    height, width, channels = img.shape

    args = ['ffmpeg', '-i', 'pipe:', '-filter:v', 'format=p010', name]
    cprint(f"$ {' '.join(args)}", 'yellow')


    converter = (
        ffmpeg.input('pipe:', format='rawvideo', pix_fmt='bgr24', s=f"{width}x{height}")
        .filter("format", "p010").output(name).overwrite_output().run_async(pipe_stdin=True)
    )
    converter.communicate(input=img.astype(np.uint8).tobytes())
    converter.stdin.close()
    converter.wait()

def white_balance(img, balancer="simple"):
    if balancer == "simple":
        wb = cv.xphoto.createSimpleWB()
    elif balencer == "grayworld":
        wb = cv.xphoto.createGrayworldWB()
    return wb.balanceWhite(img)

def invert(img):
    return cv.bitwise_not(img)

def show_write(img, name):
    cv.imwrite(name, img, [cv.IMWRITE_JPEG_QUALITY, 100])
    cv.imshow('grid', img)

    cv.waitKey(0)

def main(argv) -> int:
    global ultrahdr_app_bin
    parser = argparse.ArgumentParser(prog='enhance_image.py')
    parser.add_argument('--input', '-i', required=True, help='input')
    parser.add_argument('--output', '-o', help='output')
    parser.add_argument('--keep', '-k', default=False, action='store_true', help='keep intermediate files')
    args = parser.parse_args()

    if ultrahdr_app_bin == '' or os.path.isfile(ultrahdr_app_bin) and os.access(ultrahdr_app_bin, os.X_OK):
        ultrahdr_app_bin = shutil.which('ultrahdr_app')

    if args.input:
        input = args.input

    if args.output:
        output = args.output
    else:
        output = f"{input}-out.jpg"
    yuv_output = f"{output}.yuv"
    if not args.keep:
        atexit.register(os.remove, yuv_output)

    with Image.open(input) as im:
        #Crop if needed
        w, h = im.size
        logger.info(f"Input image {input}, size {w}x{h}")
        new_w, new_h = im.size
        new_w -= w % 2
        new_h -= h % 2
        im = im.crop((0, 0, new_w, new_h))
        if w != new_w or h != new_h:
            temp_input = f"{input}-tmp.jpg"
            logger.info(f"Input image reszized to {temp_input}, size {new_w}x{new_h}")
            if not args.keep:
                atexit.register(os.remove, temp_input)
            im.save(temp_input)
            input = temp_input
            #im = Image.open(temp_input)
        # Convert PIL to opencv
        img = cv.cvtColor(np.array(im.convert('RGB')), cv.COLOR_RGB2BGR)
        if len(pipeline):
            for processor in pipeline:
                img = globals()[processor](img)

        #show_write(img, output)
    safe_yuv(img, yuv_output)
    args = [ultrahdr_app_bin, "-m", "0", "-p", yuv_output, "-i", input, "-w", str(new_w), "-h", str(new_h), "-a", "0"]
    cprint(f"$ {' '.join(args)}", 'yellow')
    subprocess.check_call(args)
    hdr_out = os.path.join(os.getcwd(), 'out.jpeg')
    print(f"Renaming {hdr_out} to {output}")
    if os.path.isfile(hdr_out):
        os.rename(hdr_out, output)

if __name__ == "__main__":
   main(sys.argv[1:])
