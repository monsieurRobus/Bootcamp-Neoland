const express = require('express')
const Character = require('../models/Characters')
const router = express.Router()


router.get('/', async (req, res) => {


    return Character.find()
        .then(characters => res.status(200).json(characters))
        .catch(error => res.status(500).json({ error: error.message }))

    
})

module.exports = router