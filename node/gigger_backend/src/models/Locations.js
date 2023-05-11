const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        links: [{ type: String, required: true }],
        events: [{ type: mongoose.Types.ObjectId, ref: 'Event'}],
        personas: [{ type: mongoose.Types.ObjectId, ref: 'Persona'}],
        photo: { type: String, required: true },
        status: { type: String, required: true },
        

    },
    {
        timestamps: true
    }
)

const Location = mongoose.model('Location', LocationSchema)

module.exports = Location