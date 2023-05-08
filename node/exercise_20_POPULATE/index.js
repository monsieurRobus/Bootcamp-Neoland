// Server con express

const express = require('express')
const dotenv = require('dotenv')
const connect = require('./src/utils/db')

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

})

app.listen(PORT, () => {

    console.log(`Servidor corriendo en el puerto ${PORT}`)

})