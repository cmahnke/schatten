#!/usr/bin/env bash

set -e -o pipefail

IMAGE_PREFIX=content
IMAGE_GLOB="-name *.jpg -o -name *.jpeg ! -name *-hdr*"
DOCKER_IMAGE="ghcr.io/cmahnke/hdr-tools:imagemagick-main-uhdr-main-ffmpeg-py3-pip"
DOCKER_CONTAINER="hdr-tools"
DOCKER_IMAGE_LOCAL="$DOCKER_CONTAINER:local"

RUN_PREFIX='docker run -v '$(pwd)':'$(pwd)' -w '$(pwd)' -it '$DOCKER_IMAGE_LOCAL' '

SCRIPT=`dirname $0`/./enhance_image.py

# Set up image
#docker rm "$DOCKER_CONTAINER"
docker pull $DOCKER_IMAGE
docker run -it -d --name "$DOCKER_CONTAINER" "$DOCKER_IMAGE"
docker cp scripts/enhance_image.py "$DOCKER_CONTAINER":/usr/local/bin/enhance_image.py
docker exec "$DOCKER_CONTAINER" sh -c "chmod +x /usr/local/bin/enhance_image.py"
docker exec "$DOCKER_CONTAINER" sh -c "rm /usr/lib/python3.12/EXTERNALLY-MANAGED"
docker exec "$DOCKER_CONTAINER" sh -c "apk add py3-opencv; pip install 'numpy<2' Pillow jxlpy ffmpeg-python coloraide termcolor"
docker commit --change='ENTRYPOINT ["/usr/local/bin/enhance_image.py"]' "$DOCKER_CONTAINER" "$DOCKER_IMAGE_LOCAL"
docker stop "$DOCKER_CONTAINER"
docker rm -f "$DOCKER_CONTAINER"

if [ -z "$CORES" ] ; then
  # https://stackoverflow.com/a/45181694
  if [ ! command -v getconf &> /dev/null ] ; then
    CORES=2
  else
    CORES=$(getconf _NPROCESSORS_ONLN)
  fi
fi

for IMAGE in `find "$IMAGE_PREFIX" $IMAGE_GLOB`
do
    echo "Processing $IMAGE"
    DIR=`dirname $IMAGE`
    $RUN_PREFIX -i $IMAGE -o $DIR/$(basename $IMAGE .jpeg)-hdr.jpeg
done
