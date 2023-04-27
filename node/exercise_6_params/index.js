import express from 'express'

const app = express()
const PORT = 3000
const router = express.Router()

router.get('/movies/:movieId',(req,res)=>{
    const nameMovie = req.params.movieId
    const movies = ['Batman','Superman','Spiderman']

    const movie = movies.find(movie => movie === nameMovie)

    movie ? res.send(`La película ${movie} existe`) : res.send(`La película ${nameMovie} no existe`)
})

router.get('/',(req,res)=>{
    res.send("Routes con params")

})

router.get('/query',(req,res)=>{

    const nombre = req.query.nombre
    const apellido = req.query.apellido

    res.send(`Hola ${nombre} ${apellido}`)

})

app.use('/',router)

app.listen(PORT,()=>{

    console.log(`Servidor express escuchando en el puerto ${PORT}`)

})