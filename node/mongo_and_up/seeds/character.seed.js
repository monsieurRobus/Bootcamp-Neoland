const mongoose = require('mongoose')
const db = require('../utils/db')
const Character = require('../models/Characters')

const characters = [
     {
        name: "Goku",
        age: 40,
        alias: "Kakaroto"
     },
     {
        name: "Vegeta",
        age: 45,
        alias: "Vegeta"
     },
     {
        name: "Gohan",
        age: 20,
        alias: "Gohan"
     },
     {
        name: "Trunks",
        age: 20,
        alias: "Trunks"
     },
     {
        name: "Goten",
        age: 20,
        alias: "Goten"
     },
     {
        name: "Piccolo",
        age: 50,
        alias: "Piccolo"
     },
     {
        name: "Krilin",
        age: 40,
        alias: "Krilin"
     },
     {
        name: "Yamcha",
        age: 40,
        alias: "Yamcha"

     },
     {
        name: "Tenshinhan",
        age: 40,
        alias: "Tenshinhan"
     },
     {
        name: "Chaoz",
        age: 40,
        alias: "Chaoz"
     },
     {
        name: "Mutenroshi",
        age: 80,
        alias: "Mutenroshi"

     },
     {
        name: "Bulma",
        age: 40,
        alias: "Bulma"

     },
     {
        name: "Videl",
        age: 40,
        alias: "Videl"

     },
     {
        name: "ChiChi",
        age: 40,
        alias: "ChiChi"

     },
     { 
        name: "Mr. Satan",
        age: 40,
        alias: "Mr. Satan"
     },
     {
        name: "Dende",
        age: 40,
        alias: "Dende"
     },
     {
        name: "Shenlong",
        age: 40,
        alias: "Shenlong"
     },
     {
        name: "Bills",
        age: 40,
        alias: "Bills"
     },
     {
        name: "Whis",
        age: 40,
        alias: "Whis"
     },
     {
        name: "Freezer",
        age: 40,
        alias: "Freezer"
     },
     {
        name: "Cell",
        age: 40,
        alias: "Cell"
     },
     {
        name: "Majin Boo", 
        age: 40,
        alias: "Majin Boo"
     }

]

const characterDocuments = characters.map(character => new Character(character))
mongoDb = process.env.MONGO_DB_URI

const createSeed = async () => {

    try {
        const db = await mongoose
            .connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(async() => {

                // Utilizando Character.find() obtendremos un array con todos los personajes de la db
            const allCharacters = await Character.find();
                
                // Si existen personajes previamente, dropearemos la colección
            if (allCharacters.length) {
              await Character.collection.drop(); //La función drop borra la colección
            }
        
        }).catch(error=>console.error(error))
        .then(async()=>{
            await Character.insertMany(characterDocuments)
        }).catch(error=>console.error(error))
        .finally(()=>mongoose.disconnect())
    }
    catch (error) {
        console.log(error)
    }


}


module.exports = createSeed