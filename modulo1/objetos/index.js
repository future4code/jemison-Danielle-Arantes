//EXERCICIO 1 - será impresso primeiro e ultimo do elenco Matheus e Virginia, e também o canal Globo e horario 14
//EXERCICIO 2 - os 3 pontos + nome do objeto copiam ele pra esse novo. Imprimiria juca, 3 e srd no primeiro. Depois juba (porque copiado, mas nome trocado), restante igual. E por ultimo Jubo, trocando A po O de juba, restante igual.
//EXERCICIO 3 - false e undefined porque não tem altura no objeto

//EXERCICIO 1

let pessoa = {
    nome: "Danielle",
    apelidos: ["dani", " danizinha", " dany"]
}

function imprimePessoa (pessoa){

    console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}.`)

}
imprimePessoa (pessoa);

let novaPessoa = {...pessoa, apelidos: ["da", " ni", " elle"]}
imprimePessoa (novaPessoa);

//FIM EXERCICIO 1

//EXERCICIO 2

let vic = {

    nome: "Victoria",
    idade: 26,
    profissao: "Eng. Eletricista"
}

let dani = {

    nome: "Danielle",
    idade: 28,
    profissao: "Eng. Produção"
}

function valores(info){

    let informacoes = [(info.nome), (info.nome.length), (info.idade), (info.profissao), (info.profissao.length)];
    return informacoes
}
console.log (valores(vic));
console.log (valores(dani));

//FIM EXERCICIO 2

//EXERCICIO 3

let carrinho = [];
let fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
let fruta2 = {
    nome: "Maça",
    disponibilidade : false
}
let fruta3 = {...fruta1, nome: "Laranja"}

function compras (fruta1, fruta2, fruta3){

    carrinho.push(fruta1);
    carrinho.push(fruta2);
    carrinho.push(fruta3);
    return carrinho
}
compras(fruta1, fruta2, fruta3);
console.log (carrinho);

//DESAFIO 3

console.log ("Sobre o estoque temos:");
function estoque (fruta){

    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}
console.log (estoque(fruta1));
console.log (estoque(fruta2));
console.log (estoque(fruta3));

//FIM EXERCICIO 3

//DESAFIO 1

console.log ("Os dados do usuário são:")
let usuario = {
    nome: prompt("Qual o seu nome?"),
    idade: prompt("Qual sua idade?"),
    profissão: prompt("Qual sua profissão?"),
}
console.log (usuario);
console.log (`O tipo é: ${typeof usuario}.`);

//FIM DESAFIO 1

//DESAFIO 2

let filme1 = {
    nome: "Madrugada dos Mortos",
    anoDeLancamento: 2004
}
let filme2 = {
    nome: "O Exorcista",
    anoDeLancamento: 1973
}

function comparaFilme (primeiro, segundo){

    console.log (`O filmes são em ordem: ${primeiro.nome} - ano ${primeiro.anoDeLancamento} e ${segundo.nome} - ano ${segundo.anoDeLancamento}`);
    console.log (`O primeiro filme foi lançado antes do segundo? ${primeiro.anoDeLancamento < segundo.anoDeLancamento}`);
    console.log (`O primeiro filme é do mesmo ano do segundo? ${primeiro.anoDeLancamento === segundo.anoDeLancamento}`);

}
comparaFilme (filme1, filme2);
comparaFilme (filme2, filme1);

//FIM DESAFIO 2 