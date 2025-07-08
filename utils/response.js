// utils/response.js

export function successResponse(data = '', message = 'Success', statusCode = 200) {
  return {
    data,
    message,
    statusCode: String(statusCode),
    status: 'SUCCESS',
    errorcode: '',
    error: ''
  };
}

export function errorResponse(message = 'Error', error = '', statusCode = 500, errorcode = 'UNKNOWN') {
  return {
    data: '',
    message,
    statusCode: String(statusCode),
    status: 'FAILED',
    errorcode,
    error
  };
}
