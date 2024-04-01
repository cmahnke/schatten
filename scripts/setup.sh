#!/bin/sh

echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
done

convert "Source Files/Images/preview-transparent.png" -channel RGB -negate static/images/title-bg.png

#convert <input> -type Grayscale -gravity center -crop 3:2 <output>
PYTHON=`./themes/projektemacher-base/scripts/find-python3.sh` ./scripts/hdr.sh
#./scripts/svgo.sh

if [ -d ./scripts/post-build ] ; then
    echo "Don't forget to run post build scripts after 'hugo'!"
fi
