FROM node:23.9.0-alpine3.20
COPY . .
# RUN npm install
ENTRYPOINT ["npm" "run" "dev" ]
