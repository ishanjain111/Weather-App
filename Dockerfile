FROM node:14

WORKDIR /src
COPY package*.json ./
COPY package-lock*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["node", "src/app.js"]
