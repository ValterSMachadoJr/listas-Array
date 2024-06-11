const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

// slice = sigfinicar cortar, fatiar 
//alunos.slice(0, 10) - é necessário criar uma variável pois o método slice cria 
//uma cópia do array original
const sala1 = alunos.slice(0, 10); // o aluno 10 (com índice 10) não é inserido 
const sala2 = alunos.slice(10); // não é necessário colocar o até o final, basta suprimir


//Também pode escrever dessa maneira!!!
//const sala1 = alunos.slice(0, alunos.length/2); // OU SEJA DO ÍNDICE 0 ATÉ A METADE
//const sala2 = alunos.slice(alunos.length/2); // DA METADE ATÉ O FINAL DO ARRAY

console.log(sala1);
console.log(sala2);
