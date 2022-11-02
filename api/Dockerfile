FROM node:16

WORKDIR /usr/cineclub

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 82

CMD [ "npm", "run", "start" ]