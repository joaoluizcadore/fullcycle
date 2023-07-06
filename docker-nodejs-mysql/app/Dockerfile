FROM node:18

WORKDIR /app
COPY . .
RUN rm -f package-lock.json
RUN rm -rf node_modules/
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
