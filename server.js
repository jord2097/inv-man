import express from 'express';
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()
const port = process.env.PORT || 3000
const app = express()

// MIDDLEWARE
app.use(helmet())
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json()) // parses and extracts a request's JSON body to req.body
app.disable("x-powered-by") // keeps technologies used private

// START
try {
    // SERVER START
    server = await app.listen(PORT)
    // DB START

}
catch (err) {
    console.log(err)
}
finally {
    console.log(`API listening on http://localhost:%${port}`)
}