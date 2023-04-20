import http from 'http'

const requestHandler = (request, response) => {
    console.log(request.url)

}

const PORT = 3000
const server = http.createServer(requestHandler)

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})