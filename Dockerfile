FROM node:23.9.0-alpine3.20
WORKDIR /app
COPY . .
RUN apk add --update nodejs npm
RUN node --version && npm --version
ENTRYPOINT ["npm" "run" "dev" ]
