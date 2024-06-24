#!/usr/bin/env bash

set -e -o pipefail

IMAGE_PREFIX=content
IMAGE_GLOB="-name *.jpg -o -name *.jpeg ! -name *-hdr*"
DOCKER_IMAGE_HDRTOOLS="ghcr.io/cmahnke/hdr-tools:imagemagick-main-uhdr-main-ffmpeg"
DOCKER_IMAGE_OPENCV="ghcr.io/cmahnke/hdr-tools/python:3.12-alpine-opencv-4.10.0"
DOCKER_CONTAINER_HDRTOOL="hdr-tools"
DOCKER_IMAGE_LOCAL="$DOCKER_CONTAINER_HDRTOOL:local"

RUN_PREFIX='docker run -v '$(pwd)':'$(pwd)' -w '$(pwd)' -it '$DOCKER_IMAGE_LOCAL' '
TMP_DIR=$(mktemp -d)

# Set up image
docker pull $DOCKER_IMAGE_HDRTOOLS
docker pull $DOCKER_IMAGE_OPENCV
OPENCV_DEPS=$(docker inspect "$DOCKER_IMAGE_OPENCV" |jq '.[].Config.Env[] | select(contains("RUN_DEPS"))')
DEPS=$(echo $OPENCV_DEPS |sed -E 's/"RUN_DEPS=(.*)"/\1/g' |sed -E 's/@[[:alnum:]]+//g')
docker run -it -d --name "$DOCKER_CONTAINER_HDRTOOL" "$DOCKER_IMAGE_HDRTOOLS"
docker run --entrypoint /bin/busybox -i "$DOCKER_IMAGE_OPENCV"  tar -czf - /usr/local > $TMP_DIR/local.tgz
cat $TMP_DIR/local.tgz | docker exec -i "$DOCKER_CONTAINER_HDRTOOL" tar -xzkf - -C /
docker cp scripts/enhance_image.py "$DOCKER_CONTAINER_HDRTOOL":/usr/local/bin/enhance_image.py
docker exec "$DOCKER_CONTAINER_HDRTOOL" sh -c "chmod +x /usr/local/bin/enhance_image.py"
docker exec "$DOCKER_CONTAINER_HDRTOOL" sh -c "ln -s /usr/bin/ultrahdr_app /usr/local/bin/"
#docker exec "$DOCKER_CONTAINER_HDRTOOL" sh -c "rm /usr/lib/python3.12/EXTERNALLY-MANAGED"
docker exec "$DOCKER_CONTAINER_HDRTOOL" sh -c "apk add $DEPS; pip install 'numpy<2' Pillow jxlpy ffmpeg-python coloraide termcolor"
docker commit --change='ENTRYPOINT ["/usr/local/bin/enhance_image.py"]' "$DOCKER_CONTAINER_HDRTOOL" "$DOCKER_IMAGE_LOCAL"
docker stop "$DOCKER_CONTAINER_HDRTOOL"
docker rm -f "$DOCKER_CONTAINER_HDRTOOL"
rm -rf $TMP_DIR/local.tgz


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
