const express = require("express");
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const connectDB = require('./config/db');

connectDB()

const app = express()

if(process.env.MODE=='development'){
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT || 5000

app.listen(port,()=> console.log(`Server started at ${port}`))