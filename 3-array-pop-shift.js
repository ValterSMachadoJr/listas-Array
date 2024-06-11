var frutas = ['Maçã', 'Banana', 'Laranja', 'Pêssego', 'Abacaxi'];
// Removendo o último elemento do array usando o método pop
var ultimaFruta = frutas.pop();
console.log('Array após remover o último elemento:', frutas); // Saída: ['Maçã', 'Banana', 'Laranja', 'Pêssego']
console.log('Última fruta removida:', ultimaFruta); // Saída: 'Abacaxi'
// Removendo o primeiro elemento do array usando o método shift
var primeiraFruta = frutas.shift();
console.log('Array após remover o primeiro elemento:', frutas); // Saída: ['Banana', 'Laranja', 'Pêssego']
console.log('Primeira fruta removida:', primeiraFruta); // Saída: 'Maçã'
