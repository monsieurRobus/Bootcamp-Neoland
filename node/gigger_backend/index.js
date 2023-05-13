require('./utils/db')
const {app,routes} = require('./utils/server')
const songsRoutes = require('./src/routes/song.routes')
const setlistsRoutes = require('./src/routes/setlist.routes')

app.use('/',routes)
