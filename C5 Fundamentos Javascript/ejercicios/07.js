function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  
 console.log (typeof valor);
 return typeof valor;
}
esTipoDato ("Juan")
esTipoDato (20)
esTipoDato ()
esTipoDato (false)
module.exports = esTipoDato;
