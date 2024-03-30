#!/bin/sh

mkdir ./build
cd build

git clone https://github.com/google/libultrahdr.git

cd libultrahdr
mkdir build

cmake -G "Unix Makefiles"  -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DUHDR_BUILD_TESTS=0 ../
make install
