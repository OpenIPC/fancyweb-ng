FROM node:current-alpine

WORKDIR /opt/fancyweb-ng

COPY package.json yarn.lock ./

RUN corepack enable && yarn set version 4.9.2

RUN yarn install

COPY . ./

EXPOSE 5173
