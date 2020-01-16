const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const dbString = 'mongodb+srv://USER:PASSWORD@cluster.example.net/test'
// const dbString = `mongodb://USER:PASSWORD@localhost:27017/test`
mongoose.connect(
  dbString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333);

