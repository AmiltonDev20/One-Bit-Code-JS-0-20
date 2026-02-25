const vagas = []

function criarVaga(){
    let nome = prompt("Digite o nome para a vaga: ")
    let descricao = prompt("Digite uma descrição: ")
    let dataLimite = prompt("Digite uma data limite: ")

    const vagaCriada = {
        nome,
        descricao,
        dataLimite,
        candidatos: []
    }

    let resposta = confirm("Deseja confirmar? ")
        if(resposta === true){
            vagas.push(vagaCriada)
            alert("Vaga Criada")
        } else {
            alert("Não foi possivel criar uma vaga")
        }
}



function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

  alert("Vagas Disponíveis:\n" + vagasEmTexto);
}

function exibirVaga(){
    const indice = prompt("Informe o indice da Vaga que deseja exibir: ")

    if(indice >= vagas.length || indice < 0){
        alert("Indice Inválido")
        return
    }

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos" + vaga.candidatos.length +
        "\nCanditados inscritos: " + candidatosEmTexto
    )
}

function InscreverCandidato(){
    const candidato = prompt("Informe o nome do candidato(a): ")
    const indice = prompt("Informe o indice da vaga para qual o canditado deseja se inscrever: ")

    if(indice >= vagas.length || indice < 0){
        alert("Indice Inválido")
        return
    }
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada!")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja excluir: ")

    if(indice >= vagas.length || indice < 0){
        alert("Indice Inválido")
        return
    }
    
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluída")
    }
}

function exibirMenu() {
    return prompt(
        "Menu de Vagas\n"+

        "\n1 - Listar Vagas" +
        "\n2 - Criar Vaga" +
        "\n3 - Visualizar vaga" +
        "\n4 - Inscrever candidato a vaga" +
        "\n5 - Excluir uma vaga" +
        "\n6 - Sair"
    )
}


function executar(){
    let opcao = "";

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break;
            case "2":
                criarVaga()
                break;
            case "3":
                exibirVaga()
                break;
            case "4":
                InscreverCandidato()
                break;
            case "5":
                excluirVaga()
                break;
            case "6":
                alert("Encerrando...")
                break;
            default:
                alert("Opção Inválida")
                break;
        }
    } while (opcao !== "6");  
}

executar()