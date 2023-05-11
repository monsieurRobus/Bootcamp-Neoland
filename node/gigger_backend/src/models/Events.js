const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema( 
    {
        title: { type: String, required: true },
        location: { type: mongoose.Types.ObjectId, ref: 'Location' },
        personas: [{ type: mongoose.Types.ObjectId, ref: 'Persona'}],
        date: { type: Date, required: true },
        time: { type: String, required: true },
        description: { type: String, required: true },
        setlist: [{ type: mongoose.Types.ObjectId, ref: 'Setlist' }],
        cover: { type: String, required: true },
        status: { type: String, required: true },
        links: [{ type: String, required: true }],

    },
    {
        timestamps: true
    }
)

const Event = mongoose.model('Event', EventSchema)

module.exports = Event
