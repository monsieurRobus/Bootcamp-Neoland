
const dotenv = require('dotenv')
const express = require('express')
dotenv.config()
const { connect } = require('./utils/db')
const createSeed = require('./seeds/character.seed')
const Character = require('./models/Characters')
const router = express.Router()

const PORT = process.env.PORT;

const app = express();

router.get('/characters', async (req, res) => {


    return Character.find()
        .then(characters => res.status(200).json(characters))
        .catch(error => res.status(500).json({ error: error.message }))

    
})

app.use('/',router)

connect()

app.listen(PORT, () => {
    console.log(`Server running on 🎉 http://localhost:${PORT}`);
  })
  



