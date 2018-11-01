'use strict'

/**
 * Generate common responses
 */
class Response {
  /**
   * Build HTTP response
   * @param {Number} statusCode - Response HTTP status code
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object} - Response Payload
   * @example
   * {
   *   statusCode: 200,
   *   headers: {
   *     'Access-Control-Allow-Origin': '*',
   *     'Access-Control-Allow-Credentials': true
   *   },
   *   body: '{"message": "Success"}'
   * }
   */
  _buildResponse (statusCode, body, isCors = false) {
    let headers = {}

    if (body.constructor === Object) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
      body = JSON.stringify(body)
    } else {
      headers['Content-Type'] = 'text/plain;charset=utf-8'
    }

    if (isCors) {
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Credentials'] = true
    }

    return {
      statusCode,
      headers: headers,
      body: body
    }
  }

  /**
   * Request success
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  success (body, isCors = false) {
    return this._buildResponse (200, body, isCors)
  }

  /**
   * Bad request
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  badRequest (body, isCors = false) {
    return this._buildResponse (400, body, isCors)
  }

  /**
   * Request unauthorized
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  unauthorized (body, isCors = false) {
    return this._buildResponse (401, body, isCors)
  }

  /**
   * Request forbidden
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  forbidden (body, isCors = false) {
    return this._buildResponse (403, body, isCors)
  }

  /**
   * Something not found
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  notFound (body, isCors = false) {
    return this._buildResponse (404, body, isCors)
  }

  /**
   * Request methos not allowed
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  methodNotAllowed (body, isCors = false) {
    return this._buildResponse (405, body, isCors)
  }

  /**
   * Request too many
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  tooManyRequests (body, isCors = false) {
    return this._buildResponse (429, body, isCors)
  }

  /**
   * Internal error
   * @param {Object|String} body - Response payload
   * @param {Boolean} isCors - Is support CORS or not
   * @return {Object|String} - Please see {@link _buildResponse} for more detail
   */
  internalError (body, isCors = false) {
    return this._buildResponse (500, body, isCors)
  }
}

module.exports = Response
