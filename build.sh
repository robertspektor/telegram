#!/bin/sh

npm install
npm install -g nuxt
npm run build
node_modules/.bin/nuxt generate
