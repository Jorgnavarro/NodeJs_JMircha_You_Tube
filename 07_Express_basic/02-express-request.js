import express from "express";
//instanciamos express
const app = express()

//nuestra primera página creada desde el server
app.get('/', (req, res) => { 
    res.end("<h1>Using NodeJS with Express =D</h1>")
})

//estamos tomando varios parametros que estamos pasando en la Url e interctuando con ellos
//con req.params.nombredelparámetro
//es lo que se conoce como query params
app.get("/user/:id-:name-:age", (req, res) => {
    //la forma de usar los parámetros seria:
    //http://localhost:3000/user/10-Luis-30
    res.set({'content-Type': 'text/html; charset=utf-8'})
    res.end(`
        <h1>
        ${req.params.name}, Welcome to Express.js
        </h1>
        <p>Your id is: ${req.params.id}, and your age is: ${req.params.age}</p>
    `)
})

//la url que creemos debe de usarse de la forma como está abajo, en ese caso debemos usar un signo de interrogación después de la url, seguido del nombre de la variable y un igual: search?id=10, para llamarlo, ahora hacemos usos de req.query.id, y de esta forma podemos acceder al valor e interactuar con el.

app.get("/search", (req, res) =>  {
    //http://localhost:3000/search?id=10&name=Luis&age=30
    res.set({'content-Type': 'text/html; charset=utf-8'})
    res.end(`
        <h1>
        ${req.query.name}, Welcome to Express.js using queries😎
        </h1>
        <p>Your id is: ${req.query.id}, and your age is: ${req.query.age}</p>
    `)
})

const PORT = 3000

//así es como levantamos el servidor
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${3000}`)
})