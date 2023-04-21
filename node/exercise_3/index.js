import http from 'http'

const PORT = 3000


const requestHandler = (req,res) => {
    res.setHeader("Content-Type","text/json")

    res.writeHead(200)

    res.end('<h1>El server está funcionando mi pana</h1>')
}

const server = http.createServer(requestHandler)
server.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})