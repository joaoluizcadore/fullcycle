FROM node:18
WORKDIR /app
COPY . .
RUN rm -f package-lock.json
RUN rm -rf node_modules/
RUN npm install

ENV DOCKERIZE_VERSION v0.7.0

RUN apt-get update \
  && apt-get install -y wget \
  && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
  && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000

CMD [ "npm", "start" ]
