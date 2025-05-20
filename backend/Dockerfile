FROM node:16-alpine

ARG API_KEY
ENV API_KEY=${API_KEY}

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
