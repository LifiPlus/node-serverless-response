const Response = require('../Response')
const _Response = new Response()

test('Build success response', () => {
  expect(_Response.success('Test Success')).toMatchObject({body: 'Test Success', headers: {}, statusCode: 200})
})

test('Build success response with CORS', () => {
  expect(_Response.success('Test Success', true)).toMatchObject({"body": "Test Success", "headers": {"Access-Control-Allow-Credentials": true, "Access-Control-Allow-Origin": "*"}, "statusCode": 200})
})

test('Build bad request response', () => {
  expect(_Response.badRequest('Test Success')).toMatchObject({body: 'Test Success', headers: {}, statusCode: 400})
})

test('Build bad request response with CORS', () => {
  expect(_Response.badRequest('Test Success', true)).toMatchObject({"body": "Test Success", "headers": {"Access-Control-Allow-Credentials": true, "Access-Control-Allow-Origin": "*"}, "statusCode": 400})
})

test('Build unauthorized response', () => {
  expect(_Response.unauthorized('Test Success')).toMatchObject({body: 'Test Success', headers: {}, statusCode: 401})
})

test('Build unauthorized response with CORS', () => {
  expect(_Response.unauthorized('Test Success', true)).toMatchObject({"body": "Test Success", "headers": {"Access-Control-Allow-Credentials": true, "Access-Control-Allow-Origin": "*"}, "statusCode": 401})
})

test('Build forbidden response', () => {
  expect(_Response.forbidden('Test Success')).toMatchObject({body: 'Test Success', headers: {}, statusCode: 403})
})

test('Build forbidden response with CORS', () => {
  expect(_Response.forbidden('Test Success', true)).toMatchObject({"body": "Test Success", "headers": {"Access-Control-Allow-Credentials": true, "Access-Control-Allow-Origin": "*"}, "statusCode": 403})
})

test('Build not found response', () => {
  expect(_Response.notFound('Test Success')).toMatchObject({body: 'Test Success', headers: {}, statusCode: 404})
})

test('Build not found response with CORS', () => {
  expect(_Response.notFound('Test Success', true)).toMatchObject({"body": "Test Success", "headers": {"Access-Control-Allow-Credentials": true, "Access-Control-Allow-Origin": "*"}, "statusCode": 404})
})

test('Build method not allowed response', () => {
  expect(_Response.methodNotAllowed('Test Success')).toMatchObject({body: 'Test Success', headers: {}, statusCode: 405})
})

test('Build method not allowed response with CORS', () => {
  expect(_Response.methodNotAllowed('Test Success', true)).toMatchObject({"body": "Test Success", "headers": {"Access-Control-Allow-Credentials": true, "Access-Control-Allow-Origin": "*"}, "statusCode": 405})
})
