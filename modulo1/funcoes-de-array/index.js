/* EXERCICIO 1 - Vai ser impresso o item, qual seu index e o array que está
EXERCICIO 2 - Vai imprimir o novo Array só com os nomes do primeiro
EXERCICIO 3 - Vai imprimir um novo array com os itens que o apelido que não sejam Chijo
*/

//EXERCICIO 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//1 A
const nomesPets = pets.map((item, index, array) => 
{
     return item.nome
})
console.log(nomesPets)

//1 B
const salsichas = pets.filter((item, index, array) =>
{
    return item.raca === "Salsicha"
})
console.log(salsichas)

//1 C
const poodles = pets.filter ((item, index,array) =>
{
    return item.raca === "Poodle"
})

const poodlesCupom = poodles.map ((item, indice, array) =>
{
   return (`Você ganhou um cupom de 10% de desconto para tosar o/a ${item.nome}`) 
})
console.log (poodlesCupom)

//FIM EXERCICIO 1

//EXERCICIO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //2 A
const nomeProdutos = produtos.map((item, index, array) => 
{
     return item.nome
})
console.log(nomeProdutos)

//2 B
const desconto = produtos.map ((item, index,array) =>
{
    return`${item.nome}, ${(item.preco) - (item.preco * 0.05)}`  
})
console.log(desconto)

//2 C
const bebidas = produtos.filter((item, index, array) => 
{
     return item.categoria === "Bebidas"
})
console.log(bebidas)

//3 D
const ypes = produtos.filter((item, index, array) => 
{
     return item.nome.includes("Ypê")
})
console.log(ypes)

//4 D
const ypesPrecos = ypes.map((item, index, array) =>
{
    return (`Compre ${item.nome} por R$ ${item.preco}`)
})
console.log(ypesPrecos)

//FIM EXERCICIO 2

//DESAFIO 

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const ordemPokemon = pokemons.map((item, index, array) => 
{
     return item.nome
})
console.log(ordemPokemon.sort());

const tipos = pokemons.map((item, index, array) =>
{
    return item.tipo
})
const tiposUnicos = [... new Set(tipos)] //tentei um que usava indexof não consegui, esse funcionou
console.log (tiposUnicos)