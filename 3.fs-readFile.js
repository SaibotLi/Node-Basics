const fs = require ("node:fs")

console.log("Leyendo el primer archivo...")
const text = fs.readFileSync("./archivo.txt", "utf-8") // Sin codificación utf-8 enviaría un buffer con bytes.

console.log(text) // Reads archivo.txt and log it.

console.log("Leyendo el segundo archivo...")
const text2 = fs.readFileSync("./archivo2.txt", "utf-8")

console.log(text2)