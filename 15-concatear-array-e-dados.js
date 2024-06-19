const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
console.log(arrayOriginal)
console.log(arrayConcat)
//Com o exemplo acima, vemos que o JavaScript concatena o array principal e as strings de texto
//passadas como parâmetro para criar outro array, mantendo o original sem alterações.
const arrayOriginal_2 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat2 = arrayOriginal_2.concat(["André", "Fernanda"], ["Ricardo", "Ana"], 
    ["Marcelo", "Bia"])
console.log(arrayOriginal_2)
console.log(arrayConcat2)
//Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em 
//um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.