#!/bin/sh

if [ -z "$DEPENDENCY_MANAGER" ] ; then
  export DEPENDENCY_MANAGER=npm
fi

echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
done

convert "Source Files/Images/preview-transparent.png" -channel RGB -negate static/images/title-bg.png

#convert <input> -type Grayscale -gravity center -crop 3:2 <output>
#PYTHON=`./themes/projektemacher-base/scripts/find-python3.sh` ./scripts/hdr.sh
#./scripts/hdr-docker.sh
./scripts/hdr.sh
./scripts/svgo.sh

# Generate Previews
./themes/projektemacher-base/scripts/preview.sh

convert -density 300 -background none ./themes/projektemacher-base/static/images/cm.svg -monochrome -size 256x256  static/images/cm.png

./themes/projektemacher-base/scripts/saxon.sh -s:themes/projektemacher-base/static/images/cm.svg  -xsl:themes/projektemacher-base/scripts/xslt/svg-clippath.xsl -o:static/images/svgs/cm-clippath.svg

./themes/projektemacher-base/scripts/3d-models.sh

if [ -d ./scripts/post-build ] ; then
    echo "Don't forget to run post build scripts after 'hugo'!"
fi
