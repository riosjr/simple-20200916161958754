// import { Request } from 'express'
import { check } from 'express-validator'

export default [
  check('car', 'Campo obrigatório').notEmpty().trim(),
  check('text').optional().isString(),
  check('audio', 'Áudio deve ser do tipo .flac').optional().custom((value, { req }) => req.file.originalname.includes('.flac'))
  // check().custom((value, { req }) => req.body.text || req.file)
]
