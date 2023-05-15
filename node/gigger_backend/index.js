require('./utils/db')
const {app} = require('./utils/server')
const songsRoutes = require('./src/routes/song.routes')
const setlistsRoutes = require('./src/routes/setlist.routes')

app.use("/api/v1/song", songsRoutes);
app.use("/api/v1/setlist", setlistsRoutes);