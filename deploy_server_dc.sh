#! /bin/bash

yarn build:server
heroku container:push --app=nameless-citadel-37358 web
heroku container:release --app=nameless-citadel-37358 web
# docker build -t datdevboi/airbnbclone:latest .
# docker push datdevboi/airbnbclone:latest
# ssh root@67.207.84.21 "docker pull datdevboi/airbnbclone:latest && docker tag datdevboi/airbnbclone:latest dokku/airbnbclone:latest && dokku tags:deploy airbnbclone latest"
