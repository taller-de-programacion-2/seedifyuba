FROM node:12-alpine
RUN apk update && apk upgrade
RUN apk add --no-cache git
WORKDIR /opt/app
COPY package*.json ./
RUN yarn install 
COPY . .
CMD npx hardhat node --port "$PORT" --hostname "0.0.0.0"


