FROM node:23.9.0-alpine3.20
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN node --version && npm --version
ENTRYPOINT ["npm", "run", "dev"]
