let opcao = "";

do { 
    opcao = prompt("Selecione uma opção:\n" +
        "1 - Ver Perfil\n" +
        "2 - Configurações\n" +
        "3 - Meus projetos\n" +
        "4 - Suporte\n" +
        "5 - Encerrar\n"
);

switch (opcao) {
    case '1':
        alert("Você escolheu Ver Perfil")
        break;
    case '2':
        alert("Você escolheu Configurações")
        break
    case '3':
        alert("Você escolheu Meus Projetos")
        break
    case '4':
        alert("Você escolheu Suporte")
        break
    case '5':
        alert("O sistema está sendo encerrado..")
        break    
    default:
        alert("Opção Inválida, Escolha um número de 1 a 5.")
}

} while (opcao !== "5");