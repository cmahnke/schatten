#!/bin/sh

echo "Calling theme scripts"
for SCRIPT in $PWD/themes/projektemacher-base/scripts/init/*.sh ; do
    echo "Running $SCRIPT"
    bash "$SCRIPT"
done

convert "Source Files/Images/preview-transparent.png" -channel RGB -negate static/images/title-bg.png

#convert <input> -type Grayscale <output>

if [ -d ./scripts/post-build ] ; then
    echo "Don't forget to run post build scripts after 'hugo'!"
fi
