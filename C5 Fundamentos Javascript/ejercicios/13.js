function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  if (num < 90){
    return true
  } else 
  return false
}

console.log(menosQueNoventa(10))
console.log(menosQueNoventa(100))
console.log(menosQueNoventa(90))
console.log(menosQueNoventa(91))
console.log(menosQueNoventa(89.99))


module.exports = menosQueNoventa;