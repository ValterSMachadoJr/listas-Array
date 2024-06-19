// *** pop ***
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//retirar um número da último posição
numeros.pop()
console.log(numeros)

// retirar o primeiro elemento utilizando o método *** slice ***
let tirar_primeiro_elemento = [1,2,3,4,5,6,7,8,9,10,11,12]
const tirandoprimeiroelemento = tirar_primeiro_elemento.slice(1,12)
console.log(tirandoprimeiroelemento)

// retirar o primeiro elemento utilizando o método *** shift ***
let retirar_primeiro = [2,3,4,5,6,7,8,9,10,11,12]
retirar_primeiro.shift()
console.log(retirar_primeiro)
retirar_primeiro[0] = 100  // inclusão do valor 100 no índice 0 (indexação)
console.log(retirar_primeiro)

// *** adicionando elementos na primeira posição *** 
let frutas = ['maça', 'banana', 'pera', 'abacaxi', 'mamão','caqui','ovo']
console.log(frutas)
frutas.unshift('leite')
console.log(frutas)

// *** adicionando elementos/modificando na primeira posição, com indexação
frutas[0] = 'telha'
console.log(frutas)


// ** push ***
let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
//adicionar um nova letra na última posição
letras.push('j')
console.log(letras)

// *** slice ***
//criei um novo array, iniciando no índice 0 até o 10 (excluindo ele)
let retira_numeros = numeros.slice(0, 10)
console.log(retira_numeros)

// *** splice ****
//modifica o array. modificação iniciando no índice 2, indo 6 índices para frente - 
//e incluindo o terceiro argumento (o número 100)
//remove do índice 2 até o índice 7 - número 8 - modifica o array nao criando outro array (o slice faz um novo array)

let numeros_prova = [1,2,3,4,5,6,7,8,9,10,11]
numeros_prova.splice(2,6,99)
console.log(numeros_prova)
