#! /bin/bash

yarn build:server
docker build -t datdevboi/airbnbclone:latest .
docker push datdevboi/airbnbclone:latest
ssh root@67.207.84.21 "docker pull datdevboi/airbnbclone:latest && docker tag datdevboi/airbnbclone:latest dokku/airbnbclone:latest && dokku tags:deploy airbnbclone latest"
