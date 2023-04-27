import express from 'express'

const app = express()
const PORT = 3000
const router = express.Router()

router.get('/', (req,res)=> {
    res.send('Aloha, pero a ti que te pica?')
})

router.get('/movies', (req,res)=> {

    const movies = [ {title: 'Jaws', year: 1975, rating: 8},{title: 'Avatar', year: 2009, rating: 7.8},{title: 'Brazil', year: 1985, rating: 8},{title: 'الإرهاب والكباب', year: 1992, rating: 6.2}]
    res.send(movies)
})

app.use('/', router)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})