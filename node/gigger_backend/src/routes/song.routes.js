
const Songs = require('../models/Songs')
const express = require('express')
const router = express.Router()


router.get('/', (req,res,next) => {
    return Songs.find()
            .then( songs => res.status(200).json(songs))
            .catch(error=> res.status(500).json(error))
})

router.get('/:id', (req,res,next) => {

    return Songs.findById(req.params.id)
        .then (song => res.status(200).json(song))
        .catch(error => res.status(500).json(error))

})

module.exports = router