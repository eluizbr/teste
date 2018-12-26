FROM node:11.5.0-alpine

COPY ./front /front
WORKDIR /front

RUN npm install
RUN npm run build
