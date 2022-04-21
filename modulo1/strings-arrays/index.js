/*EXERCICIO 1 - a) console vai dar indefinido pq array não tem valor.
b) No segundo ela imprime o "valor" como null.
c) imprime o tamanho da array que é 11 espaços
d) imprime o elemento 0 da array que é o 3
e) imprime a array inteira, mas na posição [1] estara o valor 19
f) valor se torna o valor contido na posição [6] e imprime 9

EXERCICIO 2 - A frase aparecera toda em maiusculo "SUBI NUM ONIBUS EM MIRROCOS" pois o A foi trocado por 1, e também aparece seu tamanho 27 espaços contados 
*/

//EXERCICIO 1

let nome = prompt ("Qual seu nome?");
let email = prompt ("Qual seu e-mail?");
console.log (`O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}.`);

//FIM EXERCICIO 1

//EXERCICIO 2

let comidas = ["Lasanha", "Pizza", "Strogonoff", "Feijão Tropeiro", "Queijo"];
console.log ("Essas são as minhas comidas preferidas:", comidas);
let novaComida = prompt ("Qual sua comida preferida?");
comidas[1] = novaComida;
console.log ("Essas é a lista modificada:", comidas);

//FIM EXERCICIO 2

//EXERCICIO 3

let listaDeTarefas = [];
listaDeTarefas[0] = prompt ("Digite a tarefa 1 de 3: ");
listaDeTarefas[1] = prompt ("Digite a tarefa 2 de 3: ");
listaDeTarefas[2] = prompt ("Digite a tarefa 3 de 3: ");
console.log ("As tarefas são: ", listaDeTarefas);

let indice = prompt ("Você realizou a tarefa 1, 2 ou 3?");
listaDeTarefas.splice((indice-1), 1);
console.log ("As tarefas são: ", listaDeTarefas);

//FIM DO EXERCICO 3


//DESAFIO 1

let frase = prompt ("Digite uma frase: ");
let vetorFrase = frase.split(" ");
console.log (vetorFrase);

//FIM DESAFIO 1

//DESAIO 2

let frutas = ["Banana", "Morgando", "Abacaxi", "Laranja", "Ameixa"];
let index = frutas.indexOf("Abacaxi");
console.log (`Está no indice ${index} que corresponde a posição ${index+1} da lista`);

//FIM DESAFIO 2