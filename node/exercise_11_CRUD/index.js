const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT
connect()

app.use("*",(req,res,next)=>{

    // const error = new Error

})