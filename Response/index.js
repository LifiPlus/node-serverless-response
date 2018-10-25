'use strict'

class Response {
  _buildResponse (statusCode, body, isCors = false) {
    let headers = {}

    if (body.constructor === Object) {
      body = JSON.stringify(body)
    }

    if (isCors) {
      headers = {
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Credentials': true
      }
    }

    return {
      statusCode,
      headers: headers,
      body: body
    }
  }

  success (body, isCors = false) {
    return this._buildResponse (200, body, isCors)
  }

  badRequest (body, isCors = false) {
    return this._buildResponse (400, body, isCors)
  }

  unauthorized (body, isCors = false) {
    return this._buildResponse (401, body, isCors)
  }

  forbidden (body, isCors = false) {
    return this.buildResponse (403, body, isCors)
  }

  notFound (body, isCors = false) {
    return this._buildResponse (404, body, isCors)
  }

  methodNotAllowed (body, isCors = false) {
    return this._buildResponse (405, body, icCors)
  }

  tooManyRequests (body, isCors = false) {
    return this._buildResponse (429, body, isCors)
  }

  internalError (body, isCors = false) {
    return this._buildResponse (500, body, isCors)
  }
}

module.exports = Response
