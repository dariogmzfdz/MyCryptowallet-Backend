FROM node:alpine
WORKDIR /usr/app/users
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./src ./src
CMD npm install && npm run deploy
