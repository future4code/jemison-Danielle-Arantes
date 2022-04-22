/*Exercicio 1 - vai ser impresso o valor 10 e depois 50. Não apareceria nada no console.
Exercicio 2 - a função faz com que o texto fique todo em letra minuscula e procure se a palavra "cenoura" aparece.
Imaginei que fosse dar true apenas na frase em que a palavra está toda minuscula, mas aparentemente o includes não considera isso e retornou true em todas.
*/

//EXERCICIO 1

function informacoesSobre () {

    nome = "Danielle";
    idade = 28;
    cidade = "Ituiutaba";
    estudante = "sou";
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`);

} informacoesSobre ();

function infoUsuario (nome, idade, cidade, profissao) {

    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);

} console.log (infoUsuario ("Laís", 23, "São Paulo", "instrutora"));

//FIM EXERCICIO 1

//EXERCICIO 2

function somando (num1, num2){

    return num1 + num2;

}

function igualMaior (num1, num2){

    return num1 >= num2;

}

function seraPar (num1){
    
    return (num1 % 2) === 0;

}

function maiusculaTamanho (texto){

    maiuscula = texto.toUpperCase();
    tamanho = texto.length;
    
    return (`${maiuscula}, ${tamanho}`)
}

//chamando
console.log (somando(2,3));
console.log (somando(7,3));
console.log (igualMaior(2,3));
console.log (igualMaior(5,3));
console.log (seraPar(3));
console.log (seraPar(6));
console.log (maiusculaTamanho("serase"));
console.log (maiusculaTamanho("eu preciso de um emprego novo"));

//FIM EXERCICIO 2

function somandoDeNovo (valor1, valor2){

    return valor1 + valor2;

}
function subtracao (valor1, valor2){

    return valor1 - valor2;

}
function multiplicacao (valor1, valor2){

    return valor1 * valor2;

}
function divisao (valor1, valor2){

    return valor1 / valor2;

}
let valor1 = Number(prompt ("Qual o primeiro número?"));
let valor2 = Number(prompt ("Qual o segundo número?"));
console.log (`Números inseridos: ${valor1} e ${valor2}
Soma: ${somandoDeNovo (valor1, valor2)}
Diferença: ${subtracao (valor1, valor2)}
Multiplicação: ${multiplicacao (valor1, valor2)}
Divisão: ${divisao (valor1, valor2)}`);

//FIM EXERCICIO 3

//DESAFIO 1

function imprime(soma1){

    console.log (`Essa é a soma: ${soma1}`);

}

function outraSoma(numero1, numero2){

    imprime(numero1+numero2);

}
outraSoma(2,5);
outraSoma(58,93);

//FIM DESAFIO 2

//DESAFIO 2

function pitagoras (cateto1, cateto2){

    hipotenusa = Math.hypot(cateto1, cateto2); 
    return hipotenusa //nao achei como usar o elevado ao quadrao e raiz quadrada sem um metodo

}
console.log (`A hipotenusa é: ${pitagoras(4,3)}`);
console.log (`A hipotenusa é: ${pitagoras(12,5)}`);

//FIM DESAFIO 2