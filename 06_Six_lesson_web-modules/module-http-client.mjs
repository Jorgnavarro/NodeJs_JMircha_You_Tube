import { get } from 'node:https'


const urlSite = {
    hostname: "jonmircha.com",
    port: 443,
    path: "/cursos",
}

get(urlSite, (res) => {
    console.log(`The site ${urlSite.hostname} give you an answer. Código: ${res.statusCode}. Message: ${res.statusMessage}.`)
}).on("error", (error) => {
    console.error(`The site ${urlSite.hostname} dont give you a response. Código: ${error.code}. Message: ${error.message}.`)
})