const express = require('express')

require('./db.js')

const PORT = 3000
const app = express()
app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})