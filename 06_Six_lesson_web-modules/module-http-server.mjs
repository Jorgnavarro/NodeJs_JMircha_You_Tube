import { createServer } from 'node:http'


const server = createServer((req, res) => {
    //res.writeHead(200, {"Content-Type: "text/plain"});
    res.setHeader('content-Type', 'text/html; charset=utf-8')
    res.end("<h1>Trying again from NodeJS, we never give UP, this is not only for me!!!!</h1>")
})


const PORT = 3000
server.listen(PORT, () =>{
    console.log(`Server connected on port http://localhost:${PORT}`)
})
