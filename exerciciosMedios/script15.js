
const imoveis =[];
let opcao = "";

do {
    opcao = prompt(
        "Bem vindo(a) ao cadastro de Imóveis\n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção: " +
        "\n1 - Novo Imóvel" +
        "\n2 - Lista de Imóveis" +
        "\n3 - Sair")
    
    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Digite o nome do proprietário do imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel: ")
            imovel.banheiros = prompt("Quantos banheiros tem o imóvel: ")
            imovel.garagem = prompt("O imóvel possui garagem (S / N)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem? " + imovel.garagem
            )
            
            if (confirmacao){
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else {
                alert("Voltando ao Menu")
            }

            break;
        case "2":
            for(i = 0; i <imoveis.length; i++){
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break;
        case "3":
            alert("Encerrando")
            break;
        default:
            alert("Opção Inválida!")
            break;
    }

} while (opcao !== "3");
