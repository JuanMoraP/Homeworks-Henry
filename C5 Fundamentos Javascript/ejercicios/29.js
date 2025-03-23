function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  return (base * altura) / 2;
}
console.log (areaDelTriangulo(10, 5))
console.log (areaDelTriangulo(20, 1))
console.log (areaDelTriangulo(3, 6))
console.log (areaDelTriangulo(8, 5))
console.log (areaDelTriangulo(1, 5))


module.exports = areaDelTriangulo;
