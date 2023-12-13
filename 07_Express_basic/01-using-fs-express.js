import express from 'express'
import { resolve }from 'node:path'

const app = express()

app.get("/", (req, res) => {
    res.sendFile(resolve("index.html"))
})

const PORT = 3000

app.listen(PORT, () =>  {
    console.log(`Server running on port: http://localhost:${PORT}`);
})