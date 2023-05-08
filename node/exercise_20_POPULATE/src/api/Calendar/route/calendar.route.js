const express = require('express')
const Calendar = require('../model/calendar.model')

const router = express.Router()

router.post("/", async (req,res,next) => {

    try {
        const newCalendarDay = new Calendar(req.body)
        const calendarDay = await newCalendarDay.save()
        return postCalendarDay ? res.status(200).json(postCalendarDay) : res.status(404).json("Error creating calendar")

    }
    catch (error){

        next(error)

    }
    

})