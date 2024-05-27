#!/bin/sh

sudo add-apt-repository ppa:ubuntuhandbook1/ffmpeg7
sudo apt update
sudo apt upgrade
sudo apt install ffmpeg
ffmpeg -version
