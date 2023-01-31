FROM node:alpine3.16

COPY ["package.json", "package-lock.json", "/usr/app/"]

WORKDIR /usr/app

RUN npm install

COPY [".", "/usr/app/"]

EXPOSE 3000

CMD ["npm", "run", "start"]