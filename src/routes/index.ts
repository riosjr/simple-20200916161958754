import express from 'express'
import multer from 'multer'

import asyncWrapper from '../libs/AsyncWrapper'
import RecommendController from '@controllers/RecommendController'
import ValidationCheck from '../middlewares/ValidationCheck'
import RecommendValidator from '../validators/RecommendValidator'
import ClassifyController from '@controllers/ClassifyController'

const routes = express.Router()
const upload = multer({ dest: './uploads' })

routes.post('/', (req, res) => {
  res.json({
    msg: 'Hello WOrld'
  })
})

routes.post(
  '/api/recommend',
  [upload.single('audio'),
    RecommendValidator, ValidationCheck],
  asyncWrapper(RecommendController.post)
)

routes.get('/api/classify', ClassifyController.index)

export default routes
