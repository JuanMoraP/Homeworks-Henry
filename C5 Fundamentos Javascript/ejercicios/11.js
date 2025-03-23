function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
    if (x===y){
      return true;
    } else
    return false
}

console.log(sonIguales(5, 8));
console.log(sonIguales(10, 10));
console.log(sonIguales(2, 2));
console.log(sonIguales(0, "hola"));
console.log(sonIguales(0, 0));
console.log(sonIguales(12345, 12345));

module.exports = sonIguales;