/*Exercicio 1 - Ele vai imprimir primeiro o número 10 que é o valor de b inicialmente. Depois o valor de b é atualizado, em seguida ele imprime o valor da variavel a que é 10 e de b que agora é 5
Exercicio 2 - Ele irá imprimir os valores das variaveis a, b e c, que depois das trocas irão retornar a - 10, b - 10 e c - 10
Exercicio 3 - O programa pergunta ao usuario quantas horas ele trabalha e quanto recebe por dia, armazenando nas variaveis p e t respectivamente, e depois calcula e exibe em uma popup quanto o usuário ganha por hora
variavel p eu mudaria para horasPorDia e a variavel t para valorDaDiaria
*/

//EXERCICIO 1

let nome; //variaveis globais
let idade;

console.log ("Sem ter dado valor:", typeof nome);
console.log ("Sem ter dado valor:", typeof idade); //ambas deram undefined porque não tem nenhum valor atribuido para que o programa saiba o tipo

nome = prompt ("Qual é o seu nome?");
idade = prompt ("Qual é a sua idade?");

console.log ("Com o usuario digitando:", typeof nome);
console.log ("Com o usuario digitando:", typeof idade); //o resultado foram duas strings, pq como dito em aula todas a informações que vem do prompt chegam como string

console.log ("Olá", nome,"você tem", idade,"anos");

//FIM EXERCICIO 1

//ABAIXO EXERCICIO 2

let tempo; //variaveis globais
let jantar;
let estudante;

tempo = prompt ("Está chovendo hoje?"); 
jantar = prompt ("Você já jantou?");
estudante = prompt ("Você é um estudante labenu?");

console.log ("Está chovendo hoje?", tempo);
console.log ("Você já jantou?", jantar);
console.log ("Você é um estudante labenu?", estudante);

//FIM EXERCICIO 2


//ABAIXO EXERCICIO 3

let a = 10; //variaveis globais
let b = 25;
let c;

c = a; //fazendo a mudança de valores
a = b;
b = c;

console.log ("O novo valor de a é:", a);
console.log ("O novo valor de b é:", b);


//FIM DO EXERCICIO 3


//DESAFIO

let primeiroNum, segundoNum, soma, multiplica; //variaveis globais, testei no desafio se podiam ser declaradas juntas por ser do mesmo tipo

primeiroNum = prompt ("Digite o primeiro número: ", primeiroNum);
segundoNum = prompt ("Digite o segundo número: ", segundoNum);

primeiroNum = Number(primeiroNum); //Como o usuario é quem digita os numeros vem como string e devem ser convertidos
segundoNum = Number(segundoNum);

soma = primeiroNum + segundoNum; //operações
multiplica = primeiroNum * segundoNum;

console.log ("A soma é igual a: ", soma, "Já a multiplicação é: ", multiplica);

//FIM DESAFIO