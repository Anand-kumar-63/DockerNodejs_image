from node:22-alpine
WORKDIR ./app
copy ./package.json ./package.json
copy ./package-lock.json ./package-lock.json

run npm install

copy . .
run npm run build

expose 4000
CMD ["node", "dist/index.js"]