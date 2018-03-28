FROM node:latest

RUN npm update &&\
    npm config set user 0 &&\
    npm config set unsafe-perm true &&\
    npm install -g react-static

WORKDIR /usr/app