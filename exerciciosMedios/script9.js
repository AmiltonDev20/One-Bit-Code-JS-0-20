"use strict"

let qtdInicial = parseFloat(prompt("Digite a quantidade de dinheiro inicial: "));
let opcao = "";

do {opcao = prompt( "Dinheiro disponivel: R$" + qtdInicial + 
        "\nSelecione uma opção:\n" +
        "1 - Adicionar\n" +
        "2 - Remover\n" +
        "3 - Encerrar" )
    switch (opcao) {
        case "1":
            let soma = parseFloat(prompt("Qual valor será adicionado: "))
            qtdInicial += soma;
            break;
        case "2":
            let subtracao = parseFloat(prompt("Qual valor será removido: "))
            qtdInicial -= subtracao;
            break;
        case "3":
            alert("Encerrando..")
            break;
        default:
            alert("Opção Inválida!")    
    }
} while (opcao !== "3");