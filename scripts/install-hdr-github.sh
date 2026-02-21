#!/bin/sh

RUN_DEPENDENCIES="cmake pkg-config libjpeg-dev ninja-build"

echo "Installing $RUN_DEPENDENCIES"
sudo apt-get install $RUN_DEPENDENCIES


# TODO Replace with https://github.com/cmahnke/hdr-tools

mkdir ./build
cd build

git clone https://github.com/google/libultrahdr.git

cd libultrahdr
mkdir build
cd build

cmake -G "Unix Makefiles"  -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DUHDR_BUILD_EXAMPLES=1 -DUHDR_BUILD_TESTS=0 -DCMAKE_INSTALL_PREFIX=/usr/local ../

make
sudo make install

mkdir -p /usr/local/bin
sudo cp ultrahdr_app /usr/local/bin/
