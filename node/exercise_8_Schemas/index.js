const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000
const URI = process.env.MONGODB_URI


