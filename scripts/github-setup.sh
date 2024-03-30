#!/bin/sh

CTX_PATH="$(dirname $(realpath $0))"

$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-media.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/python-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-inkscape.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-fonts.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/dart-sass.sh

./scripts/install-hdr-github.sh 
