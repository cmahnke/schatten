#!/usr/bin/env bash

$SITE_ASSETS_DIR=../../assets/

cp common-assets/scss/* $SITE_ASSETS_DIR/scss/
cp common-assets/js/* $SITE_ASSETS_DIR/js/

cp -r card-grid/assets/scss/* $SITE_ASSETS_DIR/scss/
cp card-grid/assets/js/* $SITE_ASSETS_DIR/js/

echo "You still need to set up base.scss and main.js"
