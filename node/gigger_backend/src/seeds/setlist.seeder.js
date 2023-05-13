const mongoose = require('mongoose')
require('dotenv').config()

const Setlist = require('../models/Setlists')

const setlists = [
    {
        title: 'Setlist de prueba',
        votes: 0,
        songs: [
            "64600576d586ffd07d17b39f","64600576d586ffd07d17b3a0"
        ]
    }
]

setlistList = setlists.map(setlist => new Setlist(setlist))

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(async () => { 
            const setlistsInDB = await Setlist.find()
            if (setlistsInDB.length) {
                await Setlist.collection.drop()
            }
         })
        .catch(error => console.log(error))
        .then(async () => await Setlist.insertMany(setlists))
        .finally(() => mongoose.disconnect())