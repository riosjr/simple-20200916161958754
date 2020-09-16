class CustomError {
    name
    httpCode
    message
    constructor () {
      this.name = 'Error'
      this.httpCode = 401
      this.message = 'Error'
    }
}

// We specify an httpCode for all errors so that they can be used in the API too

class NotAuthorized extends CustomError {
  constructor (customMessage?: String) {
    super()
    this.name = this.constructor.name
    this.httpCode = 401
    this.message = customMessage || 'Not authorized.'
  }
}

class BadRequest extends CustomError {
  constructor (customMessage) {
    super()
    this.name = this.constructor.name
    this.httpCode = 400
    this.message = customMessage || 'Bad request.'
  }
}

class NotFound extends CustomError {
  constructor (customMessage) {
    super()
    this.name = this.constructor.name
    this.httpCode = 404
    this.message = customMessage || 'Not found.'
  }
}

class Forbidden extends CustomError {
  constructor (customMessage) {
    super()
    this.name = this.constructor.name
    this.httpCode = 403
    this.message = customMessage || 'Access forbidden.'
  }
}

/**
   * @apiDefine InternalServerError
   * @apiError InternalServerError An unexpected error occurred.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 500 Internal Server Error
   *     {
   *       "error": "InternalServerError",
   *       "message": "An unexpected error occurred."
   *     }
   */
class InternalServerError extends CustomError {
  constructor (customMessage) {
    super()
    this.name = this.constructor.name
    this.httpCode = 500
    this.message = customMessage || 'An unexpected error occurred.'
  }
}

export {
  CustomError,
  NotAuthorized,
  BadRequest,
  NotFound,
  Forbidden,
  InternalServerError
}
