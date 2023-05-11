const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const Character = require('../models/Characters')

const URI = process.env.MONGO_DB

const characters = [
    {
        name: "Tony Stark",
        age: 45,
        alias: "Iron Man"
    },
    {
        name: "Steve Rogers",
        age: 100,
        alias: "Captain America"
    
    },
    {
        name: "Natasha Romanoff",
        age: 35,
        alias: "Black Widow"

    },
    {
        name: "Bruce Banner",
        age: 45,
        alias: "Hulk"

    },
    {
        name: "Thor Odinson",
        age: 1000,
        alias: "Thor"
    },
    {
        name: "Clint Barton",
        age: 40,
        alias: "Hawkeye"
    },
    {
        name: "Peter Parker",
        age: 20,
        alias: "Spiderman"
    },
    {
        name: "Stephen Strange",
        age: 40,
        alias: "Doctor Strange"
    },
    {
        name: "T'Challa",
        age: 35,
        alias: "Black Panther"
    },
    {
        name: "Carol Danvers",
        age: 30,
        alias: "Captain Marvel"
    },
    {
        name: "Scott Lang",
        age: 40,
        alias: "Ant Man"
    },
    {
        name: "Wanda Maximoff",
        age: 30,
        alias: "Scarlet Witch"
    },
    {
        name: "Peter Quill",
        age: 40,
        alias: "Star Lord"
    },
    {
        name: "Gamora",
        age: 30,
        alias: "Gamora"
    }

]

const characterDocuments = characters.map(character => new Character(character))

mongoose
    .connect("mongodb+srv://cdperez85:Mongo23!@base.tb1vdek.mongodb.net/Testing102?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(async () => {

        const allCharacters = await Character.find()

        if(allCharacters.length){
            await Character.collection.drop() 
        }

    })
    .catch((err)=>{
        console.log(err)
    })
    .then(async () => {
        await Character.insertMany(characterDocuments)
    })
    .catch((err)=>{console.log(err)})
    .finally(()=>{mongoose.disconnect()})

    const { name, host } = db.connection;