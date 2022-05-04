/* EXERCICIO 1 - Ele está somando o valor + i, o resultado é 10
EXERCICIO 2 - Serão impressos todos os valores acima de 18 - do elemento que tem o 19 pra frente
Não sei como faria com o for of, mas com o while é só colocar o i sendo o indice
EXERCICIO 3 - na primeira linha um *, segunda **, até imprimir as 4 linhas solicitadas
*/
//EXERCICIO 1

console.log ("AQUI EXERCICIO 1 - PETS");
let pets = Number(prompt("Quantos animais de estimação você tem?"));
let nomesPets = [];
if (pets === 0)
{
    console.log ("Que pena! Você pode adotar um pet!")
}
else 
{
    let i = 0;
    while (i < pets)
    {
        nomesPets.push(prompt(`Qual o nome do número ${i+1}?`));
        i++
    }

}
console.log (nomesPets);

//FIM EXERCICIO 1

//EXERCICIO 2

console.log ("EXERCICIO 2");
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimeValores()
{
    for (const valores of arrayOriginal) 
    {
        console.log (valores);    
    }

}
console.log ("letra 2 A");
imprimeValores ()//aqui chama a função e tá ok

function valoresPorDez()
{
    for (const valores of arrayOriginal) 
    {
        console.log (valores/10);
    }

}
console.log ("letra 2 B");
valoresPorDez()//aqui chama a função e tá ok

function pares()
{
    let arrayPares = [];
    for (const valores of arrayOriginal) 
    {
        if ((valores % 2) === 0)
        {
            arrayPares.push(valores)
        }
    }
    return arrayPares
}
console.log ("letra 2 C");
console.log (pares()) //aqui chama a função e tá ok

function emString()
{
    let i = 0;
    let arrayString = [];
    while (i < arrayOriginal.length)
    {
        arrayString.push(`O elemento do index é: ${i} com valor de ${arrayOriginal[i]}`)
        i++
    }
    for (const num of arrayString) 
    {
            console.log (num)    
    }
}
console.log ("letra 2 D");
emString() //aqui chama a função e tá ok

function maiorMenor()
{
    maior = arrayOriginal[0];
    menor = arrayOriginal[0];
    for (const valores of arrayOriginal) 
    {
        if (valores > maior)
        {
            maior = valores;
        }
        else if (valores < menor)
        {
            menor = valores;   
        }
    }
    console.log (`O valor maior é: ${maior}
O valor menor é: ${menor}`)
}
console.log ("letra 2 E");
maiorMenor() //aqui chama a função e tá ok

//FIM EXERCICIO 2

//DESAFIO 1
console.log ("DESAFIO 1 COMEÇA AQUI");
let numero = Number(prompt("Vamos jogar!! Primeiro jogador digite um número válido entre um número entre 0 e 1000:"));
let chute = Number(prompt("Qual número você quer chutar?"));
let tentativas = 0;
if ((numero >= 0) && (numero <= 1000))
{
    while (chute !== numero)
    {
        if (chute < numero) 
        {
            console.log (`Você chutou o número: ${chute} .... e errouu, chute um número maior.`);    
        }
        else
        {
            console.log (`Você chutou o número: ${chute} .... e errouu, chute um número menor.`);
        }
        chute = Number(prompt("Qual número você quer chutar?"));
        tentativas++;
    }
    console.log (`Parabénssss você acertou!!! O número de tentativas foi ${tentativas}`);
}
else
{
    console.log ("Estava escrito entre 0 e mil, vai de novo vai, anda!")
}

//FIM DESAFIO 1

//DESAFIO 2

console.log ("DESAFIO 2 COMEÇA AQUI");
let numero2 = Math.floor(Math.random() * 101 + 0) //com a função fica fácil modificar, não deu trabalho, só tive que ler sobre
let chute2 = Number(prompt("Qual número você quer chutar? Entre 1 e 100"));
let tentativasDois = 0;
if ((chute2 > 0) && (chute2 <= 100))
{
    while (chute2 !== numero2)
    {
        if (chute2 < numero2) 
        {
            console.log (`Você chutou o número: ${chute2} .... e errouu, chute um número maior.`);    
        }
        else
        {
            console.log (`Você chutou o número: ${chute2} .... e errouu, chute um número menor.`);
        }
        chute2 = Number(prompt("Qual número você quer chutar?"));
    tentativasDois++
    }
    console.log (`Parabénssss você acertou!!! O número de tentativas foi ${tentativasDois}`);
}
else
{
    console.log ("Estava escrito entre 1 e 100, vai de novo vai, anda!")
}

//FIM DESAFIO 2