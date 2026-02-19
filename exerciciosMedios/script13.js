let opcao = "";
let listaDeBaralho = ["Rei", "Ás"];

do {
    
    let baralhoFormatado = ""

    for (let i = 0; i < listaDeBaralho.length; i++) {
        baralhoFormatado += (i + 1) + "º " + listaDeBaralho[i] + "\n";
    }

    if (baralhoFormatado == "") {
        baralhoFormatado = "Sem nenhuma carta em mãos!"
    }
    
    opcao = prompt(" Cartas em maõs \n\n" + 
    
    baralhoFormatado +

    "\n\nSelecione uma opção: \n"+
    "1 - Adicionar uma carta\n" +
    "2 - Puxar uma carta\n" +
    "3 - Sair" )

    switch (opcao) {
        case "1":
            novaCarta = prompt("Digite o nome da nova carta: ");
            listaDeBaralho.push(novaCarta)
            break;
        case "2":
            alert("A carta retirada do topo é " + listaDeBaralho.pop())
            break;
        case "3":
            alert("Encerrando o programa...");
            break;
        default:
            alert("Opção Inválida!")
            break;
    }

} while (opcao !== "3");