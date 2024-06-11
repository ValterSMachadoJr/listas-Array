const notas = [10, 6, 8, 5.5, 10]

notas.pop()//REMOVE O ÚLTIM ELEMENTO DO ARRAY(LISTA)
console.log(notas)

const media = Math.round((notas[0] + notas[1]+ notas[2] +  notas[3])/notas.length)
console.log(`A média é ${media}`)