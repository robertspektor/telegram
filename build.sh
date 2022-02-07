#!/bin/sh

chown root:www-data -R .

npm install
npm run build

docker-compose -f docker-compose-prod.yml up --build -d

npm run start
