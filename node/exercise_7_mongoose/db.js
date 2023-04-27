const dotenv = require('dotenv')
const mongoose  = require('mongoose')

dotenv.config()

const app = express()
const router = express.Router()
const mongoDb = process.env.MONGO_DB

const connect = async () =>{

    try {
        const db = await mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true})
       
        const {name,host} = db.connection
       console.log(`Conectado a la base de datos ${name} en el host ${host} de puta madre chaval 🤜🤛`) 
    } catch (error) {
        console.log(error)
    }


}

module.exports = {connect}


