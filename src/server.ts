import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'hello world' })
})

app.listen(3333)

app.get('teste')
