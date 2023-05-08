const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const Schema = mongoose.Schema

const EventSchema = new Schema({

    name: {type: String, required: true},
    description: {type: String, required: true},
    place: {type: String, required: true},
    time: {type: String, required: true}, 
    day: [{type: mongoose.Types.ObjectId, ref: "Calendar"}]

},
{
    timestamps: true
})

const Event = mongoose.model("Event", EventSchema)
module.exports = Event