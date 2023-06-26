FROM node:16-alpine

# Create app directory
WORKDIR /app

# Bundle app source
COPY ./weather-forecast-app .

# Install app dependencies
RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD [ "npm", "start" ]