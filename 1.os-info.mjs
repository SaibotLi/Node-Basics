import os from "node:os"

console.log(os.platform()) // Nombre del S.O
console.log(os.release()) // Versión del S.O
console.log(os.arch()) // ¿32/64 bits?
console.log(os.cpus()) // ¿Cuantos procesadores hay? (Permite escalar procesos en Node)
console.log(os.freemem() / 1024 / 1024)  // Memoria libre
console.log(os.totalmem() / 1024 / 1024)  // Memoria total 
