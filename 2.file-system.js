const fs = require("node:fs") // Importa el módulo File System y sus métodos.

const stats = fs.statSync("./archivo.txt") // fs.statSync Obtiene información del archivo.

console.log(
stats.isFile(), // True porque es un file.
stats.isDirectory(), // False porque no es un directorio.
stats.isSymbolicLink(), // Si es un enlace simbólico, en este caso no lo es.
stats.size // Tamaño del archivo.
)