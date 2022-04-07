#!/bin/sh

npm install
npm install -g nuxt
npm run build
nuxt generate

chown root:www-data -R .

