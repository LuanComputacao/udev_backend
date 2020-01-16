const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const dbString = 'mongodb+srv://luancomputacao:luancomputacao@cluster0-zv2sj.mongodb.net/test?retryWrites=true&w=majority'
// const dbString = `mongodb://luancomputacao:luancomputacao@localhost/test?retryWrites=true&w=majority`
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

