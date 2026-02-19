
let namePerson1 = prompt("Digite o nome do personagem 1: ")
let powerAtack = parseInt(prompt("Digite o poder de ataque do " + namePerson1 + " : "))

let namePerson2 = prompt("Digite o nome do personagem 2: ")
let powerDefense = parseInt(prompt("Digite o poder de defesa: "))
let life = parseInt(prompt("Digite a quantidade de pontos de vida do " + namePerson2 + " : "))
let shield = prompt("O " + namePerson2 + " possui escudo?  (S / N)")

let damage = 0;

if (powerAtack > powerDefense && shield == "N") {
    damage = powerAtack - powerDefense;
} else if(powerAtack > powerDefense && shield == "S"){
    damage = (powerAtack - powerDefense)/2; 
} else if(powerAtack < powerDefense){
    damage = 0;
}

life = Math.max(0, life - damage);

alert(`O personagem ${namePerson1} tem o poder de ataque de ${powerAtack} \n
    O personagem ${namePerson2} tem o poder de defesa de ${powerDefense} \n
    A quantidade de Dano foi: ${damage} \n
    A vida do personagem ${namePerson2} agora é: ${life}`);

