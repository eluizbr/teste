FROM nginx:1.15.7-alpine
# FROM nginx:1.15.7

RUN rm /etc/nginx/conf.d/default.conf

COPY ./docker/prod/nginx/default.conf /etc/nginx/conf.d/default.conf