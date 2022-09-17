const express = require("express");
const dotenv = require("dotenv").config()
const connectDB = require('./config/db');

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT || 5000

app.listen(port,()=> console.log(`Server started at ${port}`))