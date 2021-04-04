FROM node:10-alpine3.10

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm","start"]
