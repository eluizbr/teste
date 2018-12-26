FROM node:11.5.0-alpine

COPY ./front /front
WORKDIR /front

RUN npm install
EXPOSE 8080

CMD ["npm", "run", "serve"]