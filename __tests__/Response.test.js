const Response = require('../Response')
const _Response = new Response()

let textTemplate = {
  body: 'Test Success',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8'
  }
}

let textWithCorsTemplate = {
  body: 'Test Success',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
  }
}

test('Build success response', () => {
  textTemplate.statusCode = 200

  expect(_Response.success('Test Success')).toMatchObject(textTemplate)
})

test('Build success response with CORS', () => {
  textWithCorsTemplate.statusCode = 200

  expect(_Response.success('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build bad request response', () => {
  textTemplate.statusCode = 400

  expect(_Response.badRequest('Test Success')).toMatchObject(textTemplate)
})

test('Build bad request response with CORS', () => {
  textWithCorsTemplate.statusCode = 400

  expect(_Response.badRequest('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build unauthorized response', () => {
  textTemplate.statusCode = 401
  expect(_Response.unauthorized('Test Success')).toMatchObject(textTemplate)
})

test('Build unauthorized response with CORS', () => {
  textWithCorsTemplate.statusCode = 401

  expect(_Response.unauthorized('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build forbidden response', () => {
  textTemplate.statusCode = 403

  expect(_Response.forbidden('Test Success')).toMatchObject(textTemplate)
})

test('Build forbidden response with CORS', () => {
  textWithCorsTemplate.statusCode = 403

  expect(_Response.forbidden('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build not found response', () => {
  textTemplate.statusCode = 404
  
  expect(_Response.notFound('Test Success')).toMatchObject(textTemplate)
})

test('Build not found response with CORS', () => {
  textWithCorsTemplate.statusCode = 404

  expect(_Response.notFound('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build method not allowed response', () => {
  textTemplate.statusCode = 405

  expect(_Response.methodNotAllowed('Test Success')).toMatchObject(textTemplate)
})

test('Build method not allowed response with CORS', () => {
  textWithCorsTemplate.statusCode = 405

  expect(_Response.methodNotAllowed('Test Success', true)).toMatchObject(textWithCorsTemplate)
})
