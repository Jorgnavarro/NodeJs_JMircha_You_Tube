import express from "express";

const app = express()

app.get('/', (req, res) => { 
    res.end("<h1>Using NodeJS with Express =D</h1>")
    console.log("res: ", res)
    console.log("req: ", req)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${3000}`)
})