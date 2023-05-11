const dotenv = require('dotenv')
const Character = require('../models/Characters')
const characterDocuments = require('../seeds/character.seed')

dotenv.config()

const mongoose = require("mongoose")
const mongoDb = process.env.MONGO_DB_URI
const connect = async () => {

    try {
        const db = await mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
        // Nombre de DB y el Host en el que está
        const { name, host } = db.connection;
        console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
    } catch (error) {
        console.error(`No se ha podido conectar a la DB 💔`, error)
    }
    


}

module.exports = {connect}