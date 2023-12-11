import { basename, dirname, extname } from 'node:path'

const ruta = "/ruta/principal/archivo.txt"

const nombreArchivo = basename(ruta)
const nombreDirectorio = dirname(ruta)
const extension = extname(ruta)

console.log("Nombre del archivo: ", nombreArchivo)
console.log("Nombre del directorio: ", nombreDirectorio)
console.log("Extension del archivo: ", extension)