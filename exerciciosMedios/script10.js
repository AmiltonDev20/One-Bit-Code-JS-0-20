
// for(let indice = 0; indice <=10; indice++){
//     alert("Valor do indice: " + indice)
// }



// ---------------------------------------------------------------------------------------------

// let nome = "Amilton";
// for (let index = 0; index < nome.length; index++) {
//     console.log(nome[index])   
// }

// ---------------------------------------------------------------------------------------------



// let valorTabuada = parseInt(prompt("Digite o valor do Numero para tabuada:"))
// let resultados = ""

// for (let index = 0; index <=20 ; index++) {
//     let resultado = valorTabuada * index;
//     resultados += index + " X " + valorTabuada + " = " + resultado + "\n";
//     resultado = 0
// }

// alert("A tabuada do " + valorTabuada + " é:\n\n " + resultados)


// ---------------------------------------------------------------------------------------------



const palavra = prompt("Informe uma palavra:");
let palavraInvertida = "";

// O loop começa na última posição (length - 1)
// E continua enquanto o índice for maior ou igual a 0
for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
    alert("A palavra '" + palavra + "' é um palíndromo!");
} else {
    alert(
        "Não é um palíndromo.\n" +
        "Original: " + palavra + "\n" +
        "Invertida: " + palavraInvertida
    );
}



// const palavra = prompt("Digite uma palavra: ");
// let palavraInversa = ""

// for(let i = palavra.length -1; i >= 0; i--){
//     palavraInversa += palavra[i]
// }

// if (palavra === palavraInversa) {

// } else {
    
// }





































