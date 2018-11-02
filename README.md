[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/LifiPlus/node-serverless-response.svg?branch=master)](https://travis-ci.org/LifiPlus/node-serverless-response)

# node-serverless-response

If you are using the serverless framework to develop your micro service, this package can help you to generate the HTTP response payload.

# Installing

NPM

```
npm install node-serverless-response
```

Yarn

```
yarn add node-serverless-response
```

# Example


## General

```
const Response = require('node-serverless-response')
const _Response = new Response()

export.handler = async (event, context, callback) => {
  return _Response.success('Hello World!')
}
```

## Support CORS

```
const Response = require('node-serverless-response')
const _Response = new Response()

export.handler = async (event, context, callback) => {
  return _Response.success('Hello World!', true)
}
```
