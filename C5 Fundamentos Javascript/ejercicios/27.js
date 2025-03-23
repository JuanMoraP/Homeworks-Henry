function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:
  return alto*ancho+" m2"
}
console.log(obtenerAreaRectangulo(10, 50))
console.log(obtenerAreaRectangulo(2, 7))
console.log(obtenerAreaRectangulo(1345, 50756))

module.exports = obtenerAreaRectangulo;
