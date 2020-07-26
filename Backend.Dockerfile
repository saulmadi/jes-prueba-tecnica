FROM node:13.8-alpine

RUN apk add openssh
RUN apk add --no-cache  bash

RUN npm install -g typeorm

WORKDIR /usr/src/app
COPY  backend/package*.json ./
COPY  backend/yarn.lock ./

RUN yarn

COPY backend .

RUN yarn build