import { join } from 'node:path'

const directorio = "/ruta/principal";
const archivo = 'archivo.txt'

const rutaCompleta = join(directorio, archivo)

console.log("Ruta completa: ", rutaCompleta);