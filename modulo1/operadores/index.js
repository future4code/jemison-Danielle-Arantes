/* EXERCICIO 1 - 1 t 2 f 3 t - Na letra a irá aparecer false, na letra b false, na letra c true, o tipo é typeof boolean (rodei pra conferir se aparecia boolean)
Exercicio 2 - O problema do código é que tudo que vem pelo prompt é string, então a informação deve ser transformada para numero antes da soma.
Será impresso no console a junção escrita dos dois numeros digitados, ex se o usuario colocar 1 e 2, desse jeito apareceria o resultado 12.
Exercicio 3 - Pra isso é usar o comando Number antes de cada fator da soma
const soma = Number(primeiroNumero) + Number(segundoNumero)
*/

//EXERCICIO 1

let idade = prompt ("Qual sua idade?");
let anosAmg = prompt ("Qual a idade do seu melhor amigo/a?");
idade = Number(idade);
anosAmg = Number(anosAmg);
console.log ("Sua idade é maior do que do seu melhor amigo/a?", idade > anosAmg); //comparação
console.log (`A diferença de idade entre você e seu amigo é de: ${idade-anosAmg} anos`);


//FIM EXERCICIO 1 

//EXERCICIO 2

let par = prompt ("Insira um número PAR:");
par = Number(par);
console.log ("O resto da divisão do número", par, "por 2 é:", par % 2);
//digitados numeros pares o resto da divisão é 0
//se for digitado impar o resto assume algum valor diferente de 0

//FIM EXERCICIO 2

//EXERCICIO 3

idade = prompt ("Qual é sua idade?");
idade = Number(idade);
let idadeMeses = idade * 12;
let idadeDias = idade * 365; //sem considerar anos bisextos
let idadeHoras = idadeDias * 24; //são dias completos sem contar que horas são no momento da consulta
console.log (`Sua idade em anos: ${idade} anos.\nSua idade em meses: ${idadeMeses} meses.\nSua idade em dias: ${idadeDias} dias.\nSua idade em horas: ${idadeHoras} horas`);

//FIM EXERCICIO 3

//EXERCICIO 4

let numero1 = prompt ("Digite o primeiro número:");
let numero2 = prompt ("Digite o segundo número:");
numero1 = Number(numero1);
numero2 = Number(numero2);
console.log (`O primeiro número é maior que o segundo? ${numero1 > numero2}`);
console.log (`O primeiro número é igual ao segundo? ${numero1 === numero2}`);
console.log (`O primeiro número é divisível pelo segundo? ${numero1%numero2 === 0}`);
console.log (`O segundo número é divisível pelo primeiro? ${numero2%numero1 === 0}`);
//pra ser um numero divisivel pelo outro precisa dar resto 0

//DESAFIO 1

let kelvin, fahrenheit, celsius;
fahrenheit = 77;
console.log (`77°F é igual a ${(fahrenheit - 32) * (5/9) + 273.15}K`);
celsius = 80;
console.log (`80°C é igual a ${celsius * (9/5) + 32}°F`);
celsius = 30;
console.log (`80°C é igual a ${celsius * (9/5) + 32}°F e igual a ${celsius + 273.15}K`);
celsius = prompt (`Digite quantos graus Celsius quer converte para Fahrenheit e Kelvin:`)
celsius = Number(celsius);
console.log (`${celsius}°C é igual a ${celsius * (9/5) + 32}°F e igual a ${celsius + 273.15}K`);

//FIM DESAFIO 1 

//DESAFIO 2

const consumo = 280;
const custo = 0.05;
const desconto = 0.15; //tentei % não deu, dividi por 100
let valor = consumo * custo;
console.log (`Valor total a ser pago pelo consumo de 280Wh: R$ ${valor}`)
console.log (`O valor com desconto é de: R$ ${valor - (valor*desconto)}`)

//FIM DESAFIO 2 

//DESAFIO 3

let libra = 20, onca = 10.5, milha = 100, pes = 50, galao = 103.56, xicara = 450;

console.log (`20lb equivalem a ${libra/2.205}kg.`);
console.log (`10.5oz equivalem a ${onca/35.274}kg`);
console.log (`100mi equiavalem a ${milha*1609}m`);
console.log (`50ft equivalem a ${pes/3.281}m`);
console.log (`103.56gal equivalem a ${galao*3.7854}L`);
console.log (`450xic equivalem a ${xicara*0.24}L`);

xicara = prompt ("Quantas xícaras você quer converter em litros para sua receita?")
xicara = Number(xicara);
console.log (`${xicara}xic equivalem a ${xicara*0.24}L`);

//FIM DESAFIO 3



