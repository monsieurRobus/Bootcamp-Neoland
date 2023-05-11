// Server con express

const express = require('express')
const dotenv = require('dotenv')
const connect = require('./src/utils/db')
const calendarRouter = require('./src/api/Calendar/route/calendar.route')
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
connect()

// TIPO DE SERVIDOR

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("*", (req,res,next) => {

    const error = new Error("Ruta no encontrada")
    error.status = 404
    next(error)

})

app.use("api/v1/calendar",calendarRouter)

app.listen(PORT, () => {

    console.log(`Servidor corriendo en el puerto ${PORT}`)

})