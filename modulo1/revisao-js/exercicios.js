// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort((a, b) => a - b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    return array.filter((item) => item % 2 === 0)
} 


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let novoArray = retornaNumerosPares(array);
    return novoArray.map((item) => item * item)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maior = 0;
    for (const numero of array) {
        if (numero > maior)
        {
            maior = numero
        }
    }
    return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorValor = num2;
    let menorValor = num1;
    if (num1 > num2) {
        maiorValor = num1;
        menorValor = num2;
    } 
    return objeto = { maiorNumero: maiorValor,
        maiorDivisivelPorMenor: (maiorValor % menorValor === 0),
        diferenca: (maiorValor - menorValor)
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    i = 0;
    parada = 0;
    let primeirosPares = [];
    while (parada < n)
    {
        if (i % 2 === 0)
        {
            primeirosPares.push(i);
            parada++
        }
        i++
    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo = "";
    if ((ladoA === ladoB) && (ladoA === ladoC))
    {
        triangulo = "Equilátero"
    }
    else if ((ladoA === ladoB) || (ladoB === ladoC) || (ladoC === ladoA))
    {
        triangulo = "Isósceles"
    }
    else
    {
        triangulo = "Escaleno"
    }
    return triangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}