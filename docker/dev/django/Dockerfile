FROM python:3.6.7-alpine3.6

COPY ./server /server
WORKDIR /server

RUN apk update &&\
    apk add mariadb-dev build-base &&\
    pip install -r requirements/dev.txt