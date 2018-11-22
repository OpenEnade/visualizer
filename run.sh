#!/bin/bash

docker run -idt \
	--name client-app \
	-p 80:8080 \
	pfelipefeitosa/client-app
