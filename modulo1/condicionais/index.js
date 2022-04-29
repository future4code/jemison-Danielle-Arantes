/*EXERCICIO 1 - o código descobre se o número par ou não. Os pares passam no teste, e os impares não passam.
EXERCICIO 2 - o codigo serve pra mostrar o preço da fruta escolhida pelo cliente. Para maça será impresso o preço da fruta maçã é 2.25
sem o break ele executa a parte do default que é 5. 
EXERCICIO 3 - a primeira linha pede um numero ao usuario, recebe uma string e transforma em número.
Com 10 o número passa no teste, com -10 ele não passa e nada é impresso.
A varivel msg está declarada dentro do bloco if, então o programa principal não consegue acessar e retorna que a variavel não foi declarada.*/

//EXERCICIO 1

let idade = Number(prompt("Qual é sua idade?"));

if (idade >= 18) 
{
    console.log (`Você pode dirigir!`);
} 
else 
{
    console.log (`Você NÃO pode dirigir!`);
}

//FIM EXERCICIO 1

//EXERCICIO 2

let horario = prompt("Qual horário você estuda? Digite M para matutino, V para vespertino ou N para noturno.").toUpperCase();

if (horario === "M")
{
    console.log("Bom dia!");
} 
else if (horario === "V") 
{
    console.log("Boa tarde!");
} 
else if (horario === "N")
{
    console.log("Boa noite!");
} 
else
{
    console.log("Digite um valor válido!");
}

//FIM EXERCICIO 2

//EXERCICIO 3

console.log ("Aqui começa o exercicio 3.");

switch (horario){

    case 'M':
        console.log("Bom dia!");
        break;

    case 'V':
        console.log("Boa tarde!");
        break;

    case 'N':
        console.log("Boa noite!");
        break;

    default:
        console.log("Digite um valor válido!");
        break;
}

//FIM EXERCICIO 3

//EXERCICIO 4

let genero = prompt("Qual o gênero do filme que vai assistir?").toLowerCase();
let valorIngresso = Number(prompt("Qual o valor do ingresso?"));

if (genero === "fantasia") 
{
    if (valorIngresso < 15)
    {
        let lanchinho = prompt("Qual snack você quer comprar?");//desafio1
        console.log ("Bom filme!");
        console.log (`Aproveite seu ${lanchinho}!`);//desafio1

    }
    else 
    {
        console.log ("Escolha outro filme ai :( ");
    }
} 
else 
{
    console.log ("Escolha outro filme ai :( ");
}

//FIM EXERCICIO 4

//DESAFIO 2

let informacoes = {

    nomeCompleto: prompt("Qual seu nome completo?"),
    tipoDeJogo: prompt ("Digite IN se o jogo for internacional, e DO se for em casa:").toUpperCase(), //se aqui fosse colocado nacional e internacional
    etapaDoJogo: prompt ("Digite: SF para SEMI FINAL ----- DT para TERCEIRO LUGAR ----- FI para FINAL:").toUpperCase(), //e se aqui fosse colocado os nomes já diminuira bem também
    categoria: prompt("Qual a categoria: 1, 2, 3 ou 4?"),
    quantidade: Number(prompt("Quantos ingressos são?"))
}

let dolar = 4.10;
let SFValor = [1320, 880, 550, 220];
let DTValor = [660, 440, 330, 170];
let FIValor = [1980, 1320, 880, 330];

console.log(`---- DADOS DA COMPRA ----
Nome do cliente: ${informacoes.nomeCompleto}`) //com as mudanças citadas na linha 102 daria para os consoles ficarem aqui, só faltaria os dos valores

if (((informacoes.tipoDeJogo === "IN") || (informacoes.tipoDeJogo === "DO")) && ((informacoes.etapaDoJogo === "SF" || informacoes.etapaDoJogo === "DT" || informacoes.etapaDoJogo === "FI")) && ((informacoes.categoria === "1" || informacoes.categoria === "2" || informacoes.categoria === "3" || informacoes.categoria === "4")) && (informacoes.quantidade > 0)){
    
    if (informacoes.tipoDeJogo === "IN") 
    {
        console.log (`Tipo de jogo: Internacional`)
        switch (informacoes.etapaDoJogo)
        {
            case "SF":
                console.log (`Etapa do jogo: Semi Final
Categoria: ${informacoes.categoria}
Quantidade: ${informacoes.quantidade}
---- VALORES ---
Valor do ingresso: U$ ${SFValor[informacoes.categoria-1] * dolar}`)
                switch (informacoes.categoria){

                    case "1":
                        console.log (`Valor total: U$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    case "2":
                        console.log (`Valor total: U$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    case "3":
                        console.log (`Valor total: U$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    default:
                        console.log (`Valor total: U$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                }
            break
            case "DT":
                console.log (`Etapa do jogo: Terceiro Lugar
Categoria: ${informacoes.categoria}
Quantidade: ${informacoes.quantidade}
---- VALORES ---
Valor do ingresso: U$ ${DTValor[informacoes.categoria-1] * dolar}`);
                switch (informacoes.categoria){
                    
                    case "1":
                        console.log (`Valor total: U$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    case "2":
                        console.log (`Valor total: U$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    case "3":
                        console.log (`Valor total: U$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    default:
                        console.log (`Valor total: U$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    
                }
            break
                
            default:
                console.log (`Etapa do jogo: Final
Categoria: ${informacoes.categoria}
Quantidade: ${informacoes.quantidade}
---- VALORES ---
Valor do ingresso: U$ ${FIValor[informacoes.categoria-1] * dolar}`);
                switch (informacoes.categoria){
                    case "1":
                        console.log (`Valor total: U$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    case "2":
                        console.log (`Valor total: U$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    case "3":
                        console.log (`Valor total: U$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                    default:
                        console.log (`Valor total: U$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade *dolar}`)
                    break
                }
            break
            
        }
    } 
    else 
    {
        console.log (`Tipo de jogo: Nacional`)  
        switch (informacoes.etapaDoJogo)
        {
            case "SF":
                console.log (`Etapa do jogo: Semi Final
Categoria: ${informacoes.categoria}
Quantidade: ${informacoes.quantidade}
---- VALORES ---
Valor do ingresso: R$ ${SFValor[informacoes.categoria-1]}`)
                switch (informacoes.categoria){

                    case "1":
                        console.log (`Valor total: R$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    case "2":
                        console.log (`Valor total: R$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    case "3":
                        console.log (`Valor total: R$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    default:
                        console.log (`Valor total: R$ ${SFValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                }
            break
            case "DT":
                console.log (`Etapa do jogo: Terceiro Lugar
Categoria: ${informacoes.categoria}
Quantidade: ${informacoes.quantidade}
---- VALORES ---
Valor do ingresso: R$ ${DTValor[informacoes.categoria-1]}`);
                switch (informacoes.categoria){
                    
                    case "1":
                        console.log (`Valor total: R$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    case "2":
                        console.log (`Valor total: R$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    case "3":
                        console.log (`Valor total: R$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    default:
                        console.log (`Valor total: R$ ${DTValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    
                }
            break
                
            default:
                console.log (`Etapa do jogo: Final
Categoria: ${informacoes.categoria}
Quantidade: ${informacoes.quantidade}
---- VALORES ---
Valor do ingresso: R$ ${FIValor[informacoes.categoria-1]}`);
                switch (informacoes.categoria){
                    case "1":
                        console.log (`Valor total: R$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    case "2":
                        console.log (`Valor total: R$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    case "3":
                        console.log (`Valor total: R$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                    default:
                        console.log (`Valor total: R$ ${FIValor[informacoes.categoria-1] * informacoes.quantidade}`)
                    break
                }
            break
        }
            
    }
}
else 
{
    console.log ("Por favor informe os dados certos!"); //e da pra colocar a logica dentro de uma função que recebe o objeto atualizado
}

//FIM DESAFIO 2