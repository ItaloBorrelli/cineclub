FROM node:16

WORKDIR /usr/web

COPY . .

RUN npm install
RUN npm install -g serve

ARG NODE_ENV

RUN if [ ${NODE_ENV} = "production" ] ; then npm run build ; fi