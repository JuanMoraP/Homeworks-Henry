// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearHaciaArriba(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes redondear "num" hacia arriba y retórnalo.
  // Por ejemplo: 
  // 2.5 ---> 3
  // 0.1 ---> 1
  // Tu código:
  return Math.ceil(num)
}
console.log (redondearHaciaArriba(3.7))
console.log (redondearHaciaArriba(4.4))
console.log (redondearHaciaArriba(1.1))
console.log (redondearHaciaArriba(2))
module.exports = redondearHaciaArriba;