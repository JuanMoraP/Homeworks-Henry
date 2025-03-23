function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido
}
console.log(combinarNombres("Juan", "Mora"))
console.log(combinarNombres("Gina", "Salcedo"))
console.log(combinarNombres("Lionel", "Messi"))
console.log(combinarNombres("Lulada", ""))

module.exports = combinarNombres;
