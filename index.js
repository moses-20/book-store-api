// modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// variables
const PORT = process.env.PORT
const dbLink = process.env.dbLink

// route variables
const bookRoute = require('./routes/book.route')

// database connection
mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
 app.listen(PORT, () => {
  console.info('DATABASE IS CONNECTED AND SERVER IS RUNNING')
 })
})

// middlewares
app.use(bodyParser.json())


// routes
app.use(bookRoute)

// error pages

