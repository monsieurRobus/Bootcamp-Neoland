const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CalendarSchema = new Schema({

    date: {type: Date, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    events: [{type: Schema.Types.ObjectId, ref: "Event"}],

},{timestamps: true})

const Calendar = mongoose.model("Calendar", CalendarSchema)
module.exports = Calendar