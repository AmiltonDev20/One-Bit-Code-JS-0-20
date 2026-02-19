
const nome = prompt("Digite o seu nome: ")

let salarioAtual = parseFloat(prompt("Digite o seu Salário atual: "));
let codigo = parseInt(prompt("Digite o seu código: "))

if (codigo === 1) {
    desconto = 100.00
}else if (codigo === 2){
    desconto = 150.00
}else if (codigo === 3){
    desconto = 200.00
}else{
    alert("Código Desconhecido, tente novamente!")
}

salarioFinal = salarioAtual - desconto

alert(`Olá ${nome}, com base nas suas informações o seu desconto é R$${desconto.toFixed(2)}, ficando com o salário final de R$${salarioFinal.toFixed()}`);
