# this is used to indicate the node verion buid to use
FROM node:12-alpine3.14
# this creates a directory "app" on the docker build
WORKDIR /app
#COPY package.json /app first to install important dependencies
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --only=production && npm cache clean --force
# copy every other files and folders to "app" later
COPY . /app
# run npm to start the build
CMD ["npm", "start"]
# indicate the apps working port
EXPOSE 3000