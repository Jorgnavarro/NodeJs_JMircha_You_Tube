import { createServer } from 'node:http'
//se hace porque la página usa https, el create server debe hacerse con http
import { get } from 'node:https'

const hostname = "localhost"

const PORT = 3000

const options = {
    host: "jonmircha.com",
    port: 443,
    path: "/cursos"
}

let htmlCode = ""

const httpClient = res => {
    console.log(`The site ${options.host} has been response. Code ${res.statusCode}. Message: ${res.statusMessage}.`);
    res.on("data", data => {
        htmlCode += data
        console.log(data.toString());
    })
}

const httpError = error => {
    console.log(`The site ${options.host} couldn't response. Code ${error.code}. Message: ${error.message}.`);
}

const webServer = (req, res) => {
    res.statusCode = 200
    res.setHeader('content-Type', 'text/html; charset=utf-8')
    res.end(htmlCode)
}

//instancia cliente http o https
get(options, httpClient).on("error", httpError)

//instancia servidor local HTTP
createServer(webServer).listen(PORT, () => {
    console.log(`Sever listening on port: http://${hostname}:${PORT}`)
})