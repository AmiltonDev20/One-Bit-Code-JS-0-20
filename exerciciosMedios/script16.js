function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}

// dobro(10)

function dizerOla(nome){
    alert("Olá, " + nome + "!")
}

// dizerOla("Amilton")
function soma(a, b){
    alert("O resultado da soma é: " + (a + b))
}

// soma(12, 90)

// function criarUsuario(nome, email, senha, tipo){
//     const usuario = {
//         nome,  //mesmo que nome
//         email,
//         senha,
//         tipo
//     }

//     console.log(usuario)
// }

// criarUsuario("Isaac", "isaac@gmail.com", "1234")

function muitosParametros(nome, telefone, email, endereco, senha){
    //...
}

//ao inves de fazer igual o de cima a gente cria um objeto como parametro

function objetoComoParametro(usuario){
    usuario.nome
    usuario.telefone
    usuario.email
    usuario.endereco
    usuario.senha
}

const dadosDoUsuario ={
    nome: "",
    telefone : "",
    email: "",
    endereco: "",
    senha: ""
}

objetoComoParametro(dadosDoUsuario)

//ao inves de criar varios parametro, cria um objeto com os atributos necessario, 
// e de parametro vc so passa o objeto ficando muito mais legivel e simples
