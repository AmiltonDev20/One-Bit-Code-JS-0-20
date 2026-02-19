
// let qtdInicial = parseFloat(prompt("Digite a quantidade de dinheiro inicial: "));
// let opcao = "";

// do {opcao = prompt( "Dinheiro disponivel: R$" + qtdInicial + 
//         "\nSelecione uma opção:\n" +
//         "1 - Adicionar\n" +
//         "2 - Remover\n" +
//         "3 - Encerrar" )
//     switch (opcao) {
//         case "1":
//             let soma = parseFloat(prompt("Qual valor será adicionado: "))
//             qtdInicial += soma;
//             break;
//         case "2":
//             let subtracao = parseFloat(prompt("Qual valor será removido: "))
//             qtdInicial -= subtracao;
//             break;
//         case "3":
//             alert("Encerrando..")
//             break;
//         default:
//             alert("Opção Inválida!")    
//     }
// } while (opcao !== "3");

let opcao = "";
let listaDePacientes = []

do {
    
    let pacientesFormatados = ""

    for (let i = 0; i < listaDePacientes.length; i++) {
        pacientesFormatados += (i + 1) + "º " + listaDePacientes[i] + "\n";
    }

    if (pacientesFormatados == "") {
        pacientesFormatados = "Sem nenhum paciente na fila!"
    }
    
    opcao = prompt(" Lista de Pacientes: \n\n" + 
    
    pacientesFormatados +

    "\n\nSelecione uma opção: \n"+
    "1 - Novo Paciente\n" +
    "2 - Consultar Paciente\n" +
    "3 - Sair" )

    switch (opcao) {
        case "1":
            novoPaciente = prompt("Digite o nome do novo paciente: ");
            listaDePacientes.push(novoPaciente)
            break;
        case "2":
            if (listaDePacientes) {
                alert("O paciente consultado é " + listaDePacientes.shift())
            } else {
                alert("Não há pacientes na Fila")
            }

            break;
        case "3":
            alert("Encerrando o programa...");
            break;
        default:
            alert("Opção Inválida!")
            break;
    }

} while (opcao !== "3");
