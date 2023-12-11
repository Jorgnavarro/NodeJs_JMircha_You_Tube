import { format } from 'node:url'

const urlObj = {
    protocol : "https",
    hostname: "www.example.com",
    pathname: "/ruta",
    query: {parametro1: "valor1", parametro2: "valor2"},
}

const urlString = format(urlObj)

console.log("URL completed", urlString);