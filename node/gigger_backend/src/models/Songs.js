const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema(
    
    { 
        title: { type: String, required: true },
        subtitle: { type: String, required: true},
        artist: { type: String, required: true },
        tags: [{ type: String, required: true }],
        duration: { type: Number, required: true },
        lyrics: { type: String, required: true },
        cover: { type: String, required: false },
        details: { type: String, required: false },

    }
    ,
    {
        timestamps: true
    }

    )

const Song = mongoose.model('Song', SongSchema)

module.exports = Song