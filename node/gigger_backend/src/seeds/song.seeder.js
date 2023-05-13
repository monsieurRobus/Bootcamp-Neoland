const mongoose = require('mongoose')

const Song = require('../models/Songs')

const songs = [
    {
        title: 'Killing Locamenti',
        artist: 'Efectiviwonders',
        subtitle: 'Las Grecas against The Machine',
        tags: ['Rock', 'Medley', 'Flamenco', 'Rap', 'Metal'],
        duration: 250,
        cover: 'https://picsum.photos/300/300'

    },
    {
        title: 'Monica Naranjo will survive',
        artist: 'Efectiviwonders',
        subtitle: 'Monica Naranjo + Gloria Gaynor',
        tags: ['Rock', 'Medley', '70', 'Metal'],
        duration: 220,
        cover: 'https://picsum.photos/300/300'

    }
]

const songList = songs.map(song => new Song(song))

module.exports = songList