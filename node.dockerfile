FROM node:latest

ENV PORT=3000

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN rm -rf node_modules/
RUN npm cache clean
RUN npm install

RUN npm install -g gulp
RUN npm install -g nodemon
RUN npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
RUN npm prune

RUN gulp deploy

EXPOSE $PORT
CMD ["nodemon", "server/server.js"]