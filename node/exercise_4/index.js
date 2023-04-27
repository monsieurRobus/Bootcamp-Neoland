import express from 'express'

const PORT = 3000
const server = express()

server.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})

server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`)
});