// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCubo(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cubo.
  // Por ejemplo: 
  // 3 ---> 27
  // 0 ---> 0
  // Tu código:
  return Math.pow (num, 3);
}
console.log (elevarAlCubo(3))
console.log (elevarAlCubo(4))
console.log (elevarAlCubo(5))
console.log (elevarAlCubo(6))

module.exports = elevarAlCubo;
