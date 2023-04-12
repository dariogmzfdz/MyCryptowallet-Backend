FROM node:alpine
WORKDIR /usr/app/api-gateway
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]
COPY ./ ./
CMD npm install && npm run deploy
