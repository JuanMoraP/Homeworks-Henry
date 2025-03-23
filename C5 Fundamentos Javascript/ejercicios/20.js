function resta(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la resta de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 5
  // 5, 5 ---> 0
  // Tu código:
  return x-y;
}
console.log (resta(30, 5))
console.log (resta(3, 5))
console.log (resta(1, 2))
console.log (resta(0, 50))
console.log (resta(-10, 5))


module.exports = resta;