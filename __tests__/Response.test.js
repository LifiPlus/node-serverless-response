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

let jsonTemplate = {
  body: '{"message":"Test Success"}',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}

let jsonWithCorsTemplate = {
  body: '{"message":"Test Success"}',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
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

test('Build success JSON response', () => {
  jsonTemplate.statusCode = 200

  expect(_Response.success({message: 'Test Success'})).toMatchObject(jsonTemplate)
})

test('Build success JSON response with CORS', () => {
  jsonWithCorsTemplate.statusCode = 200

  expect(_Response.success({message: 'Test Success'}, true)).toMatchObject(jsonWithCorsTemplate)
})

test('Build bad request response', () => {
  textTemplate.statusCode = 400

  expect(_Response.badRequest('Test Success')).toMatchObject(textTemplate)
})

test('Build bad request response with CORS', () => {
  textWithCorsTemplate.statusCode = 400

  expect(_Response.badRequest('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build bad request JSON response', () => {
  jsonTemplate.statusCode = 400

  expect(_Response.badRequest({message: 'Test Success'})).toMatchObject(jsonTemplate)
})

test('Build bad request JSON response with CORS', () => {
  jsonWithCorsTemplate.statusCode = 400

  expect(_Response.badRequest({message: 'Test Success'}, true)).toMatchObject(jsonWithCorsTemplate)
})

test('Build unauthorized response', () => {
  textTemplate.statusCode = 401
  expect(_Response.unauthorized('Test Success')).toMatchObject(textTemplate)
})

test('Build unauthorized response with CORS', () => {
  textWithCorsTemplate.statusCode = 401

  expect(_Response.unauthorized('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build unauthorized JSON response', () => {
  jsonTemplate.statusCode = 401

  expect(_Response.unauthorized({message: 'Test Success'})).toMatchObject(jsonTemplate)
})

test('Build unauthorized JSON response with CORS', () => {
  jsonWithCorsTemplate.statusCode = 401

  expect(_Response.unauthorized({message: 'Test Success'}, true)).toMatchObject(jsonWithCorsTemplate)
})

test('Build forbidden response', () => {
  textTemplate.statusCode = 403

  expect(_Response.forbidden('Test Success')).toMatchObject(textTemplate)
})

test('Build forbidden response with CORS', () => {
  textWithCorsTemplate.statusCode = 403

  expect(_Response.forbidden('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build forbidden JSON response', () => {
  jsonTemplate.statusCode = 403

  expect(_Response.forbidden({message: 'Test Success'})).toMatchObject(jsonTemplate)
})

test('Build forbidden JSON response with CORS', () => {
  jsonWithCorsTemplate.statusCode = 403

  expect(_Response.forbidden({message: 'Test Success'}, true)).toMatchObject(jsonWithCorsTemplate)
})

test('Build not found response', () => {
  textTemplate.statusCode = 404
  
  expect(_Response.notFound('Test Success')).toMatchObject(textTemplate)
})

test('Build not found response with CORS', () => {
  textWithCorsTemplate.statusCode = 404

  expect(_Response.notFound('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build not found JSON response', () => {
  jsonTemplate.statusCode = 404

  expect(_Response.notFound({message: 'Test Success'})).toMatchObject(jsonTemplate)
})

test('Build not found JSON response with CORS', () => {
  jsonWithCorsTemplate.statusCode = 404

  expect(_Response.notFound({message: 'Test Success'}, true)).toMatchObject(jsonWithCorsTemplate)
})

test('Build method not allowed response', () => {
  textTemplate.statusCode = 405

  expect(_Response.methodNotAllowed('Test Success')).toMatchObject(textTemplate)
})

test('Build method not allowed response with CORS', () => {
  textWithCorsTemplate.statusCode = 405

  expect(_Response.methodNotAllowed('Test Success', true)).toMatchObject(textWithCorsTemplate)
})

test('Build method not allowed JSON response', () => {
  jsonTemplate.statusCode = 405

  expect(_Response.methodNotAllowed({message: 'Test Success'})).toMatchObject(jsonTemplate)
})

test('Build method not allowed JSON response with CORS', () => {
  jsonWithCorsTemplate.statusCode = 405

  expect(_Response.methodNotAllowed({message: 'Test Success'}, true)).toMatchObject(jsonWithCorsTemplate)
})
