import express from "express";
import { resolve } from "node:path";


const app = express()

app.get('/', (req, res) => { 
    res.set({'content-Type': 'text/html; charset=utf-8'})
    res.send("<h1>Using NodeJS with Express 🤩</h1>")
})

app.get('/json', (req, res) => { 
    res.json({
        name: "Luis Navarro",
        age: 30,
        youtube: "@jorgluisnavarro",
    })
})

app.get('/file', (req, res) => { 
    res.sendFile(resolve("index.html"))
})

app.get('/template', (req, res) => { 
    //missing settings, but this is the method render. Does not work, because we need to especify the engine templates to express.js
    res.render("template")
})

app.get('/playlistForCode', (req, res) => { 
    //res.send("<h1>Welcome to my channel on youTube</h1>")
    //redireccionando a nuestro playlist en youtube
    res.redirect(301, "https://www.youtube.com/playlist?list=PLJ5KFl-uMIFDbZ0VyShIibrau-eCP3OnI")
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${3000}`)
})