# ConcurrentStreamLimits

## Prerequisets

Install [Node](https://nodejs.org) and [MongoDB](https://www.mongodb.org).

## Install

```
$ git clone git@github.com:kuu/ConcurrentStreamLimits.git
$ cd ConcurrentStreamLimits
$ npm install
$ mkdir data
```

## Run

```
$ npm run db
```

If the default port (27017) is used, use another one by specifying it like:
```
$ npm run db -- --port 27018
```

In a separate console:
```
$ npm start
```

Go to http://localhost:3000 with your browser.
