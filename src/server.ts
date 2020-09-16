import dotenv from 'dotenv'
import AppController from './app'

const app = new AppController().express

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

app.listen(process.env.APP_PORT, () =>
  console.log(`Listening on Port ${process.env.APP_PORT}`)
)
