const mongoose = require('mongoose')

const PersonaSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        links: [{ type: String, required: true }],
        events: [{ type: mongoose.Types.ObjectId, ref: 'Event'}],
        persons: [{ type: mongoose.Types.ObjectId, ref: 'Persona'}],
        photo: { type: String, required: true },
        status: { type: String, required: true },

    },
    {
        timestamps: true
    }
)

const Persona = mongoose.model('Persona', PersonaSchema)

module.exports = Persona