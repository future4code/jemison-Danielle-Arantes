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
  let novoArray = array.sort((a, b) => a - b);
  let segundoMaiorSegundoMenor = [novoArray[novoArray.length-2], novoArray[1]]
  return segundoMaiorSegundoMenor

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaRandomizada = {...pessoa, nome: "ANÔNIMO"}
    return pessoaRandomizada
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((item, index, array) => ((item.altura >= 1.5) && ((item.idade > 14) && (item.idade < 60))))
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((item, index, array) => ((item.altura < 1.5) || (item.idade <= 14) || (item.idade >= 60)))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
    let i = 0;
    while (i < contas.length)
    {
        let j = contas[i].compras.length - 1;
        while (j >= 0)
        {
            contas[i].saldoTotal = contas[i].saldoTotal - contas[i].compras[j]
            contas[i].compras.pop(contas[i].compras[j]);
            j--
        }
        i++
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}