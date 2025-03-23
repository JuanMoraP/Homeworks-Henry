function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  if (num % 2 === 0){
    return true;
  } else
  return false;
}
console.log(esPar(10))
console.log(esPar(7))
console.log(esPar(4))
console.log(esPar(1))
console.log(esPar(1999))
console.log(esPar(0))

module.exports = esPar;
