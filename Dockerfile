FROM node:8.9.3

RUN mkdir app

COPY . /app

WORKDIR /app

RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

CMD ["npm", "start"]
