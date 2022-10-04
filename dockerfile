FROM node:14

WORKDIR /make-parties
COPY package.json .
RUN npm install
COPY . .
CMD npm start