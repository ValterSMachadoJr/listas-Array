const alunos = ['joão', 'ana', 'caio', 'Lara', 'Marjorie', 'Leo', 'Beatriz']

//splice = significa emendar, juntar
// o primeiro indica o índice do primeiro elemento a retirar e o segundo indica 
// a quantidade 
// O método splice altera o array orignal (difirente do slice)


alunos.splice(1, 1)
console.log(alunos)

alunos.splice(1,2,"Rodrigo") // permite um terceiro parâmetro
console.log(alunos)