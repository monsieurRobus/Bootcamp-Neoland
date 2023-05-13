const mongoose = require('mongoose')
require('dotenv').config()
const Song = require('../models/Songs')

const songs = [
    {
        title: 'Killing Locamenti',
        artist: 'Efectiviwonders',
        subtitle: 'Las Grecas against The Machine',
        tags: ['Rock', 'Medley', 'Flamenco', 'Rap', 'Metal'],
        duration: 250,
        cover: 'https://picsum.photos/300/300',
        lyrics: 'Hola, soy una letra de canción',

    },
    {
        title: 'Monica Naranjo will survive',
        artist: 'Efectiviwonders',
        subtitle: 'Monica Naranjo + Gloria Gaynor',
        tags: ['Rock', 'Medley', '70', 'Metal'],
        duration: 220,
        cover: 'https://picsum.photos/300/300',
        lyrics: 'Hola, soy una letra de canción',

    }
]

const songList = songs.map(song => new Song(song))
const MONGO_DB = process.env.MONGO_DB
mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(async () => { 
            const songsInDB = await Song.find()
            if (songsInDB.length) {
                await Song.collection.drop()
            }
            
        })
        .catch(error => console.log(error))
        .then(async () => await Song.insertMany(songList))
        .finally(() => mongoose.disconnect())