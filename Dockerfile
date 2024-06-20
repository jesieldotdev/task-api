FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

USER node

EXPOSE 3000

CMD ["yarn", "start:prod"]