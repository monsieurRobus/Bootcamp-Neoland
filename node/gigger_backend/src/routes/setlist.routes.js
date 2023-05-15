const Setlist = require('../models/Setlists')
const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    return Setlist.find()
            .then(setlists => res.status(200).json(setlists))
            .catch(error => res.status(500).json(error))
})

router.get('/:id',(req,res,next)=>{
    return Setlist.findById(req.params.id)
            .then(setlists => res.status(200).json(setlists))
            .catch(error => res.status(500).json(error))
})

module.exports = router