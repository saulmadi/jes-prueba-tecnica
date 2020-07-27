FROM node:13.8-alpine

RUN apk add openssh
RUN apk add --no-cache  bash


WORKDIR /usr/src/app
COPY  frontend/package.json ./
COPY  frontend/yarn.lock ./

RUN yarn

COPY frontend .
