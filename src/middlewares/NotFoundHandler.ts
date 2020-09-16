import { NotFound } from '../libs/Errors'

export default (req, res, next) => {
  return next(new NotFound('Não encontrado'))
}
