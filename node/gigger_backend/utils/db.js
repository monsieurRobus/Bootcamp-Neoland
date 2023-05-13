const mongoose = require('mongoose')
require('dotenv').config()

const mongoDB = process.env.MONGO_DB

const connect = async ()=> {
    try {
        const db = await mongoose
                        .connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
        const { name, host } = db.connection;
        console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
        return db
    }
    catch (error)
    {
        console.error(error)
    }
}

const db = connect()
