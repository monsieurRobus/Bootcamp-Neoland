
const Songs = require('../models/Songs')
const {routes} = require('../../utils/server')


routes.get('/songs', (req,res,next) => {
    return Songs.find()
            .then( songs => res.status(200).json(songs))
            .catch(error=> res.status(500).json(error))
})
