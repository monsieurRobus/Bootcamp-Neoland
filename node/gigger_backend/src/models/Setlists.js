const mongoose = require('mongoose')

const SetlistSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        votes: { type: Number, required: true},
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Musician' },
        songs: [ 
            {type: mongoose.Schema.Types.ObjectId, ref: 'Song'}
        ]
    },
    {
        timestamps: true
    }
)

const Setlist = mongoose.model('Setlist', SetlistSchema)
module.exports = Setlist
