#!/usr/bin/env bash

set -e -o pipefail

IMAGE_PREFIX=content
IMAGE_PATTERN="*.jpeg"

SCRIPT=`dirname $0`/./enhance_image.py


if [ -z "$PYTHON" ] ; then
  PYTHON=python3
else
  echo "Using python command '$python'"
fi

if [ -z "$CORES" ] ; then
  # https://stackoverflow.com/a/45181694
  if [ ! command -v getconf &> /dev/null ] ; then
    CORES=2
  else
    CORES=$(getconf _NPROCESSORS_ONLN)
  fi
fi
JOBFILE=$(mktemp) # The GNU version of the tool is a step backwards, on BSD this works as well: -t 3D_JOBS
mkdir -p ~/.parallel
touch ~/.parallel/will-cite

for IMAGE in `find "$IMAGE_PREFIX" -name "$IMAGE_PATTERN"`
do
    echo "Processing $IMAGE"
    DIR=`dirname $IMAGE`
    $PYTHON $SCRIPT -i $IMAGE -o $DIR/$(basename $IMAGE .jpeg)-hdr.jpeg

done
