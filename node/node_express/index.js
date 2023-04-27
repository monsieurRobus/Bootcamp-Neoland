import express from 'express'

const PORT = 3000
const server = express()

const router = express.Router()


router.get('/', (req, res) => {

    res.send("Esto primero")

})

router.get('/peliculicas', (req, res) => {
    const peliculas = ['Pelicula1', 'Pelicula2', 'Pelicula3']

    const findMovieIndex = peliculas.findIndex((movie) => movie === req.query.movie)

    res.send(peliculas[findMovieIndex])


})

router.get('/peliculicas/:id', (req, res) => {

    const peliculas = ['Pelicula1', 'Pelicula2', 'Pelicula3']

    const findMovieIndex = peliculas.indexOf(req.params.id)
    console.log(findMovieIndex,req.params.id)
    res.send(peliculas[findMovieIndex])

})





server.listen(PORT, () => {

    console.log(`Server started in http://localhost:${PORT}`)

})

server.use('/', router)