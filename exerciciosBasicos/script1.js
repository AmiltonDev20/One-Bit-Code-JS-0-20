"use strict"

const nome = prompt("Digite o seu nome: ");
const anoDeNascimento = parseInt(prompt("Digite a sua data de nascimento: "));
let dataAtual = parseInt(prompt("Digite a data atual: "));

let idade = dataAtual - anoDeNascimento; 

alert(`Olá ${nome}, A sua idade é ${idade}`)