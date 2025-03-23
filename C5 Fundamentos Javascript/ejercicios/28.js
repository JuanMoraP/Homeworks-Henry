function retornarPerimetro(lado) {
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:
   if (typeof lado !== "number"){
      return "Dato incorrecto"
   } else
      return lado * 4
}
console.log(retornarPerimetro(2))
console.log(retornarPerimetro(true))
console.log(retornarPerimetro(15))
console.log(retornarPerimetro("5"))
console.log(retornarPerimetro(1))

module.exports = retornarPerimetro;
