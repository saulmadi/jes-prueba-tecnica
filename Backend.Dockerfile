FROM node:13.8-alpine

RUN apk add openssh
RUN apk add --no-cache  bash

RUN npm install -g typeorm

WORKDIR /usr/src/app
COPY  server/package.json ./
COPY  server/yarn.lock ./

RUN yarn

COPY server .

RUN yarn build