# build stage
FROM node:9.11.1-alpine
# make the 'app' folder the current working directory
WORKDIR /app
# copy both 'package.json' and 'package-lock.json' (if available)
USER node

COPY package*.json ./
# install project dependencies
RUN npm install
# insall process manager
RUN npm install pm2@latest -g
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

ENV NODE_ENV production

CMD ["pm2", "start", "src/app.js;"]