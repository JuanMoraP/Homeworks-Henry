function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0){
    return "Es positivo";
  } else if (num < 0) {
  return "Es negativo";
  } else
  return undefined;
}
console.log(esPositivo(10))
console.log(esPositivo(1))
console.log(esPositivo(0))
console.log(esPositivo(-2))
console.log(esPositivo(-500))

module.exports = esPositivo;