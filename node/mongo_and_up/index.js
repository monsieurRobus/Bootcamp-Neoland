
const dotenv = require('dotenv')
const express = require('express')
dotenv.config()
const { connect } = require('./utils/db')
const createSeed = require('./seeds/character.seed')
const Character = require('./models/Characters')
const router = express.Router()
const CharacterRoutes = require('./routes/character.routes')

const PORT = process.env.PORT;

const app = express();


router.use('/characters',CharacterRoutes)

router.get('/character/:id', async (req, res) => {

    const id = req.params.id
    try {

        const character = await Character.findById(id)
        if(character){
            return res.status(200).json(character)
        }
        else {
            return res.status(404).json({error: 'Character not found'})
        }
s
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
    }
)

router.get('/character/alias/:alias', async (req, res) => {

    try {
        const characterByAlias = await Character.find({alias: req.params.alias})

        return res.status(200).json(characterByAlias)
            
    }
    catch (error) {

        return res.status(500).json({ error: error.message  })
    }

})

router.get('/characters/age/:age', async (req, res) => {

    const { age } = req.params

    try {
        const charactersByAge = await Character.find({ age: {$gt: age} })

        return res.status(200).json(charactersByAge)

    }
    catch (error) {

        return res.status(500).json({ error: error.message })
    }

})

app.use('/',router)

connect()

app.listen(PORT, () => {
    console.log(`Server running on 🎉 http://localhost:${PORT}`)
})



