function areaTriangular(){
    const base = parseFloat(prompt("Digite a base do Triangulo: "))
    const altura = parseFloat(prompt("Digite a altura do Triangulo: "))

    return (base * altura)/2
}

function areaRetangular(){
    const base = parseFloat(prompt("Digite a base do Retangulo: "))
    const altura = parseFloat(prompt("Digite a altura do Retangulo: "))

    return base * altura
}

function areaQuadrada(){
    const lado = parseFloat(prompt("Digite o lado do Quadrado: "))

    return lado * lado
}

function areaTrapezio(){
    const baseMaior = parseFloat(prompt("Digite o valor da base Maior: "))
    const baseMenor = parseFloat(prompt("Digite o valor da base Menor: "))
    const altura = parseFloat(prompt("Digite a altura: "))

    return (baseMaior + baseMenor) * altura / 2
}

function areaCircular(){
    const pi = 3.14;
    const raio = parseFloat(prompt("Digite o valor do raio: "))

    return  pi * (raio * raio)
}

function mostrarResultado(resultado){
    alert("O resultado dessa função é: " + resultado)
}

function exibirMenu(){
    return prompt(
        "Calculadora Geométrica " +
        "\n1 - Área do Triangulo" +
        "\n2 - Área do Retangulo" +
        "\n3 - Área do Quadrado" +
        "\n4 - Área do Trápezio" +
        "\n5 - Área do Circulo"  +
        "\n6 - Sair"
    )
}


function executar(){
    let opcao = "";

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                resultado = areaTriangular()
                mostrarResultado(resultado)
                break;
            case "2":
                resultado = areaRetangular()
                mostrarResultado(resultado)
                break;
            case "3":
                resultado = areaQuadrada()
                mostrarResultado(resultado)
                break;
            case "4":
                resultado = areaTrapezio()
                mostrarResultado(resultado)
                break;
            case "5":
                resultado = areaCircular()
                mostrarResultado(resultado)
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

executar();
