FROM node:16.19.1-bullseye-slim as angular-built

ARG NG_CLI_VERSION=15.2.4
ARG USER_HOME_DIR="/tmp"
ARG APP_DIR="/app"
ARG USER_ID=1000

ENV NPM_CONFIG_LOGLEVEL warn
ENV HOME "$USER_HOME_DIR"

# npm 5 uses different userid when installing packages, as workaround su to node when installing
# see https://github.com/npm/npm/issues/16766
RUN set -xe \
    && apt-get update && apt-get install curl -y \
    && curl -sL https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64 > /usr/bin/dumb-init \
    && chmod +x /usr/bin/dumb-init \
    && mkdir -p $USER_HOME_DIR \
    && chown $USER_ID $USER_HOME_DIR \
    && chmod a+rw $USER_HOME_DIR \
    && chown -R node /usr/local/lib /usr/local/include /usr/local/share /usr/local/bin \
    && (cd "$USER_HOME_DIR"; su node -c "npm install -g @angular/cli@$NG_CLI_VERSION; npm install -g yarn; chmod +x /usr/local/bin/yarn; npm cache clean --force")


WORKDIR $APP_DIR
EXPOSE 4200

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

RUN ng build --configuration production

USER $USER_ID

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

FROM nginx:alpine
COPY --from=angular-built app/dist/join-group /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]
