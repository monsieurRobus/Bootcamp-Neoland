require('./utils/db')
require('./utils/server')

const Song = require('./src/models/Songs')
const { db } = require('./src/models/Songs')
const songList = require('./src/seeds/song.seeder')

db.then(async () => {

    await Song.insertMany(songList)

})

