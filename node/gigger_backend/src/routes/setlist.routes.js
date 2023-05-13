const Setlist = require('../models/Setlists')
const {routes} = require('../../utils/server')

routes.get('/setlists',(req,res,next)=>{
    return Setlist.find()
            .then(setlists => res.status(200).json(setlists))
            .catch(error => res.status(500).json(error))
})