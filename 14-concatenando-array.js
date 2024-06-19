const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
const funcionarios = [nomes, idades, faculdade];
if (funcionarios[2][0] === false){
    console.log(`A funcionária ${funcionarios[0][0]}, possui ${funcionarios[1][0]}
anos e não possui faculdade `)
}
//O array funcionarios é um array de duas dimensões.
//Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”.
//O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios
//será acessado. podendo ser:
// 0 -> nomes
//1 -> idades
//2 -> faculdade
//O segundo colchete será usado para acessar a informação dentro do array escolhido.
//Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas
//como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha
//e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o
//segundo colchete.
