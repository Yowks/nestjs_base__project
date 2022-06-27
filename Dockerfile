FROM node:14-alpine
WORKDIR "/app"
COPY . .
RUN npm ci
RUN npm run build
CMD [ "sh", "-c", "npm run start:prod"]