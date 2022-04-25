// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Olá mundo!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {

  let altura = Number(prompt ("Digite a altura do altura do retângulo em metros"));
  let largura = Number(prompt ("Digite a largura do retângulo em metros: "));
  let area = altura * largura;
  console.log (area);

}

// EXERCÍCIO 02
function imprimeIdade() {
  
  let anoAtual = Number(prompt ("Digite o ano atual: "));
  let anoNasc = Number(prompt ("Digite o ano de nascimento: "));
  let idade = anoAtual - anoNasc;
  console.log (idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return peso / (altura * altura);

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

  let nome = prompt ("Qual é o seu nome?");
  let idade = Number(prompt ("Qual é a sua idade?"));
  let email = prompt ("Qual seu e-mail?");

  console.log ("Meu nome é "+ nome + ", tenho "+ idade + " anos, e o meu email é " + email + ".");

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  let cor1 = prompt ("Digite a primeira cor: ");
  let cor2 = prompt ("Digite a primeira cor: ");
  let cor3 = prompt ("Digite a primeira cor: ");
  let cores = [cor1, cor2, cor3];
  console.log (cores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return custo / valorIngresso;

} 


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length === string2.length;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  let ultimo = array.length;
  return array[ultimo-1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {

  let ultimo = array.length;
  let aux = array [0];
  array [0] = array [ultimo-1];
  array [ultimo-1] = aux;
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  string1 = string1.toUpperCase();
  string2 = string2.toUpperCase();
  return string1 === string2;

}

//DESAFIOS
// EXERCÍCIO 13
function checaRenovacaoRG() {

  let anoAtual = prompt ("Qual o ano atual?");
  let nascimento = prompt ("Qual ano você nasceu?");
  let carteira = prompt ("Qual ano emitiu sua identidade?");
  let idade = anoAtual - nascimento;
  let renova = anoAtual - carteira;
  let resposta = ((idade <= 20) && (renova >= 5)) || (((idade > 20) && (idade <= 50)) && (renova >= 10)) || ((idade > 50) && (renova >= 15));

  console.log (resposta);

  /*if (idade<=20) {

    console.log (renova>=5);

  } 
  else if ((idade>20) && (idade<=50)) {

    console.log (renova>=10);

  } 
  else {

    console.log (renova>=15);
  }*/
    
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  return ((ano % 400 === 0) || ((ano % 4 === 0) && (ano % 100 !== 0)))

  /*if (resto === 0) {

    return resto === 0;

  } 
  else if (resto2 === 0) {
  
    if ((resto3 == 0 && resto !== 0) === true)
   
    return false;
    else {

    return true;
  } 
  }
  else {
    return false;
  }*/

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  let idade = prompt ("Você tem mais de 18 anos?");
  let escolaridade = prompt ("Você possui ensino médio completo?");
  let horario = prompt ("Você possui disponibilidade exclusiva durante os horários do curso?");

  console.log ((idade === "sim") && (escolaridade === "sim") && (horario === "sim"));

}