Instructions for Mac:

First things first run:

### `npm install`

To launch the app run:

### `npm start`

This will launch the app on localhost:3000

Docker
------

I've also added a Dockerfile so you can run the app in docker.

Install Docker first - i think you can go here https://store.docker.com/search?offering=community&q=&type=edition

Then run:

### docker build -t <name> .

and then:

### docker run -p <port>:3000 <name>

where <port> is the port you want to run the app on - localhost:<port>

Once you have got it running in docker if you want to kill it, open a new terminal window:

### docker ps

gives you a list of running docker images, and then taking the NAMES (last column) from the previous command

### docker kill <NAMES>
