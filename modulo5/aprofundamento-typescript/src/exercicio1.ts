//LETRA A
//const minhaString : string = 2 - diz que o tipo number não pode ser atribuido a uma string

// LETRA B
// const meuNumero: number = 2
// const meuNumero2: number | string = "dois"

type User = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorEscolhida  {
    VERMELHA = "vermelha", 
    LARANJA = "laranja", 
    AMARELA = "amarela", 
    VERDE = "verde", 
    AZUL = "azul", 
    AZULESCURO = "azulEscuro",
    VIOLETA = "violeta"
}

// const pessoa1: User = {
//     nome: "Danielle",
//     idade: 29,
//     corFavorita: "preto"
// } SERIA ASSIM ANTES DO ENUM

const pessoa1: User = {
    nome: "Danielle",
    idade: 29,
    corFavorita: CorEscolhida.VERMELHA
}
const pessoa2: User = {
    nome: "Anonimo",
    idade: 29,
    corFavorita: CorEscolhida.AZUL
}

const pessoa3: User = {
    nome: "Luisa",
    idade: 29,
    corFavorita: CorEscolhida.VIOLETA
}
const arrayUser = []
arrayUser.push(pessoa1)
arrayUser.push(pessoa2)
arrayUser.push(pessoa3)

console.table(arrayUser)