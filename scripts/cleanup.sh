#!/bin/sh

#cd i18n
#rm *.toml
#git checkout .
rm static/images/title-bg.png
find content/post -name "*-hdr.jpeg" -exec rm {} \;
