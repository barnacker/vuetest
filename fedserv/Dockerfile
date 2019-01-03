FROM node:9.11.1-alpine
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
# install project dependencies
RUN npm install
# insall process manager
#RUN npm install pm2@latest -g
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

ENV NODE_ENV development

CMD [ "npm", "run", "dev" ]