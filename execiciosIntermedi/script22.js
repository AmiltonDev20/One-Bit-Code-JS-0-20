function calcular(a, b, operacao){
    console.log("Realizando uma operação")
    const resultado = operacao(a, b)
    return resultado
}

//High Order functions são funções que recebem uma outra função como parametro

function somar(x, y){
    console.log("Realizando uma soma")
    return x + y
}

calcular(3, 5, somar) //passando a propria função e não o retorno dela

console.log(calcular(8, 4, function (x, y){
    console.log("Realizando uma subtração")
    return x - y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçâ", "Laranja", "Limão", "Uva"]

for(let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}// dá pra ser substituido pelo ForEach

lista.forEach(exibirElemento)

