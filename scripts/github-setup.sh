#!/usr/bin/env bash

set -e -o pipefail

CTX_PATH="$(dirname $(realpath $0))"

$CTX_PATH/../themes/projektemacher-base/scripts/github/jxl-0.12.0.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-media.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-docker.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/python-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-inkscape.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-fonts.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-xslt.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/dart-sass.sh

./scripts/ffmpeg-8.sh
./scripts/install-hdr-github.sh
docker pull ghcr.io/cmahnke/hdr-tools:latest
