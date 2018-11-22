FROM node:11

RUN git clone https://github.com/OpenEnade/ClientApp.git

WORKDIR ./ClientApp

RUN yarn install

CMD yarn run serve
