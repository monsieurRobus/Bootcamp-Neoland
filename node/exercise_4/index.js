import http from 'http'

const requestHandler = (req, res) => {
    req.url=== '/bonico' ? res.end('Hello Bonico') : res.end('Hello Feico')
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server started in http://localhost:${PORT}`)
});