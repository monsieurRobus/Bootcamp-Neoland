const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

const connect = async () => {

    try {
        const db = mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    
        const {host,name} = db.connection
        console.log(`Conectado a ${host} en la base de datos ${name}`)
    
    }
    catch (error){

        console.log(error)

    }

}

module.exports = connect