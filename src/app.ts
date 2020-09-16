import express from 'express'
// const routes = require('./routes')
import routes from './routes'
import cors from 'cors'
import errorHandler from './middlewares/ErrorHandler'
import NotFoundHandler from './middlewares/NotFoundHandler'

class AppController {
    express
    constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
    }

    middlewares () {
      this.express.use(cors())
      this.express.use(express.json())
    }

    routes () {
      this.express.use(routes)
      this.express.use(NotFoundHandler)
      this.express.use(errorHandler)
    }
}

export default AppController
