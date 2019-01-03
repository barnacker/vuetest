FROM keymetrics/pm2:latest-alpine
# Bundle APP files
COPY src src/
COPY package.json .
COPY pm2.json .
# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
# Show current folder structure in logs
#RUN ls -al -R
EXPOSE 3030
CMD [ "pm2-runtime", "start", "pm2.json" ]