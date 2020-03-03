FROM node:10.19.0-alpine3.11

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD npm start

EXPOSE 8081



