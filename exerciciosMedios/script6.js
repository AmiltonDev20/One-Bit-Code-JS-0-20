
let nameTurist = prompt("Eaí Turista, qual seu nome:");

let cities = ""
let qtdCity = 0;

let confirmCity = prompt("Você ja visitou alguma cidade (S / N)");

while (confirmCity == "S"){
    let cidade = prompt("Qual é nome da visitada? ")
    cities += " - " + cidade + "\n"
    qtdCity++
    confirmCity = prompt("Você visitou alguma outra cidade? (S / N) ")
}

alert(`Turista: ${nameTurist} 
    \n Quantidade de Cidades visitadas:  ${qtdCity}
    \n Cidades Visitadas: ${cities}`)