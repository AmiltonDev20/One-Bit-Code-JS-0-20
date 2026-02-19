let pessoa = {
    nome: "Amilton",
    idade: 23,
    dizerOla(){
        console.log("Meu nome é " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla()