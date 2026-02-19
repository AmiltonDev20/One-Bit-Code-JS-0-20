let valorMetros = parseFloat(prompt("Digite a unidade de medida em metros: "));
let medida = prompt("Para qual unidade deseja converter: (mm, cm, dm, dam, hm, km)").toLowerCase();

let resultado = 0;
let opcaoValida = true; // Variável de controle

switch(medida){
    case "mm":
        resultado = valorMetros * 1000; 
        break;
    case "cm":
        resultado = valorMetros * 100; 
        break;
    case "dm":
        resultado = valorMetros * 10;
        break;
    case "dam":
        resultado = valorMetros / 10;
        break;
    case "hm":
        resultado = valorMetros / 100; 
        break;
    case "km":
        resultado = valorMetros / 1000;
        break;
    default:
        opcaoValida = false;
        alert("Opção Inválida!");
}

if (opcaoValida) {
    alert(`Conversão concluída!\n\n${valorMetros}m equivalem a ${resultado} ${medida}`);
}

// let valorMetros = parseFloat(prompt("Digite a unidade de medida em metros: "))

// let medida = prompt("Qual a unidade de medida que deseja converter: (mm) / (cm) / (dm) / (dam) / (hm) / (km)")

// let resultado = 0;

// switch(medida){
//     case "mm":
//         resultado = valorMetros * 1000; 
//         break;
//     case "cm":
//         resultado =  valorMetros * 100; 
//          break;
//     case "dm":
//         resultado =  valorMetros * 10;
//          break;
//     case "dam":
//         resultado =  valorMetros / 10;
//          break;
//     case "hm":
//         resultado =  valorMetros / 100;; 
//          break;
//     case "km":
//         resultado =  valorMetros / 1000;
//          break;
//     default:
//         alert("Opção Inválida!")
// }

// alert(`O valor ${valorMetros}m em ${medida} é ${resultado}`)