const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./router')
const uri = "mongodb+srv://jord2097:9Y8ML4kvEPcTqR99@cluster0.q2ktn.mongodb.net/?retryWrites=true&w=majority" // MongoDB URI

dotenv.config()
const port = process.env.PORT || 3000
const app = express()

// MIDDLEWARE
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json()) // parses and extracts a request's JSON body to req.body
app.disable("x-powered-by") // keeps technologies used private
app.use(router)

// START
let server
let db
try {
    // SERVER START
    server = app.listen(port)
    // DB START
    db = mongoose.connection
}
catch (err) {
    console.log(err)
}
console.log(`API listening on http://localhost:${port}`)
console.log(`Connected to DB`)
    