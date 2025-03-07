FROM node:23.9.0-alpine3.20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN node --version && npm --version
ENTRYPOINT ["npm", "run", "dev", "--host", "0.0.0.0" ]
