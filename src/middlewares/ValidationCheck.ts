const { validationResult } = require('express-validator')
const { BadRequest } = require('../libs/Errors')

export default (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next(new BadRequest(errors.array()))
  }
  return next()
}
