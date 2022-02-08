#!/bin/sh

chown root:www-data -R .

docker-compose -f docker-compose-prod.yml up --build -d
