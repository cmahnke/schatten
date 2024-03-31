#!/bin/sh

mkdir ./build
cd build

git clone https://github.com/google/libultrahdr.git

cd libultrahdr
#git checkout 1.0.0
mkdir build
cd build

cmake -G "Unix Makefiles"  -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DUHDR_BUILD_TESTS=0 -DCMAKE_INSTALL_PREFIX=/usr/local ../
make
#cmake --install . --prefix "/usr/local"

mkdir -p /usr/local/bin
sudo cp ultrahdr_app /usr/local/bin/
