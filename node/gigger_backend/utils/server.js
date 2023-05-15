const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`Hola buenos giornos, estamos en el puerto ${PORT}`))

module.exports = {app}