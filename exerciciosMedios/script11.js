
// const listaDeCompras = []
// console.log(listaDeCompras)

// listaDeCompras[0] = "Arroz"
// listaDeCompras[1] = "Feijao"

// console.log(listaDeCompras);

const arr = ["Frodo", "Sam", "Amilton", "Roberto"]
console.log(arr)

//Adicionar elementos no final
//push

arr.push("Jorge");
console.log(arr)

//unshift  - adiciona elementos no começo

arr.unshift("Cleber");
console.log(arr)

//pop  - remove o ultimo elemento

ultimoElemento = arr.pop()
console.log(ultimoElemento)

//shift - remove no começo

arr.shift()

//pesquisar por um elemento
//Includes

const inclui = arr.includes("Amilton")
console.log(inclui)

//indexOf

const indice = arr.indexOf("Sam");
console.log(indice)

//cortar e concatenar
//slice

const hobbits = arr.slice(0, 3) //começa no 0 e pega 4 elementos
console.log(hobbits)

const outros = arr.slice[-4]
console.log("outros")

// concatenar
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

//Substituição do Elementos
//Splice

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//iterar sobre os elementos
for(let i = 0; i < sociedade.length; i++){
    const elemento = sociedade[i]
    console.log(elemento + " se encontra na posição " + i)  
}