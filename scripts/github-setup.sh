#!/bin/sh

CTX_PATH="$(dirname $(realpath $0))"

$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/python-dependencies.sh
