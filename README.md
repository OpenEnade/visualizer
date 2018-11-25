# OpenEnade web site. [![CircleCI](https://circleci.com/gh/OpenEnade/ClientApp/tree/master.svg?style=svg)](https://circleci.com/gh/OpenEnade/ClientApp/tree/master)

Client application to provide a simple graphical user interface example for the [OpenEnade Api](https://github.com/OpenEnade/API).

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1e8cf44e489b45d1a9ac4770302ab06e)](https://app.codacy.com/app/paulofelipe.feitosa/OpenEnade-ClientApp?utm_source=github.com&utm_medium=referral&utm_content=OpenEnade/OpenEnade-ClientApp&utm_campaign=Badge_Grade_Dashboard)

## How to use this project.

It's recommended to use Yarn as the standard package management tool but it's not required.

#### To install  
```
yarn install
```
#### Compiles and hot-reloads for development
```
yarn run serve
```
#### Compiles and minifies for production
```
yarn run build
```
#### Lints and fixes files
```
yarn run lint
```
#### Run your unit tests
```
yarn run test:unit
```

## Using ClientApp with Docker

### How to run

#### Docker direct command

To access the application: [http://localhost](http://localhost).
```
docker run -idt \
	--name client-app \
	-p 80:8080 \
	pfelipefeitosa/client-app
```

The application will be served in port 80.

#### run.sh script

To access the application: [http://localhost](http://localhost).
```
bash run.sh
```

The application will be served in port 80.

### How to build

```
bash build.sh
```
