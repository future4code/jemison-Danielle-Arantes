let jogador, computador, valorJogador, valorComputador, stringJogador, stringComputador; // VARIAVEIS GLOBAIS

//----------------------- FUNÇÕES -------------------------------------------------------

function sorteador () // RESPONSÁVEL POR SORTEAR AS CARTAS
{
   jogador = [comprarCarta(), comprarCarta()]
   computador = [comprarCarta(), comprarCarta()];
}

function calculoValor (valores) // CALCULA O VALOR TOTAL DOS JOGADORES
{
   total = 0;
   for (const valor of valores) 
   {
      total += valor.valor;
   }
   return total
}

function nomeCartas (player) //TRANSFORMA O ARRAY DE CARTAS PARA UM STRING PRA IMPRIMIR
{
   let i = 0;
   let stringCartas = "";
   while (i < (player.length))
   {
      stringCartas += (player[i].texto)
      i++
   }
   return stringCartas
}

function quemVenceu (stringComputador, stringJogador) //DEFINE QUEM GANHA
{
   let vitoria = ""
   if (valorComputador > 21)
   {
      vitoria = "O usuário ganhou!!"
   }
   else if (valorJogador > 21)
   {
      vitoria = "O computador ganhou!!"
   }
   else if (valorComputador < valorJogador)
   {
      vitoria = "O usuário ganhou!!"
   } 
   else if (valorComputador > valorJogador)
   {
      vitoria = "O computador ganhou!!"
   }
   else 
   {
      vitoria = "Deu empate!!"
   }
   alert(`Suas cartas são ${stringJogador} com valor total de ${valorJogador}.
As cartas do computador são ${stringComputador} com valor total de ${valorComputador}
${vitoria}`)
}

//-----------------------  FIM FUNÇÕES -------------------------------------------------------

console.log ("Boas vindas ao jogo de BlackJack!")
if(confirm("Você quer iniciar uma nova rodada?"))//NOVA RODADA
{
   sorteador ();
   valorJogador = (calculoValor(jogador));
   valorComputador = (calculoValor(computador));
   while ((valorJogador > 21) || (valorComputador > 21))
   {
   
      sorteador();//SE FOR DOIS A SORTEIA DE NOVO, UNICA CHANCE DE SER É DANDO 22 NA SOMA

   }
   if ((valorJogador < 21) && (valorComputador < 21)) 
   {
   
      if (valorJogador < 21) //SE FOR MENOR QUE 21 VAI PEDIR SE O JOGADOR QUER MAIS CARTAS
      {
         let teste = confirm(`Suas cartas são: ${jogador[0].texto}${jogador[1].texto},  pontuação de ${valorJogador}.
Já a carta revelada do computador é: ${computador[0].texto}. 
Deseja comprar mais uma carta?`);
         stringJogador = nomeCartas (jogador);

            while (teste === true)
            {
               jogador.push(comprarCarta());
               stringJogador = nomeCartas (jogador);
               valorJogador = calculoValor(jogador);
                  if (valorJogador < 21) //SE PERMANECER MENOR QUE 21 SEGUE PERGUNTANDO
                  {
                     teste = confirm(`Suas cartas são: ${stringJogador}, pontuação de ${valorJogador}.
Já a carta revelada do computador é: ${computador[0].texto}. 
Deseja comprar mais uma carta?`);   
                  } 
                  else 
                  {
                     teste = false   
                  }
            }
      }
      stringComputador = nomeCartas (computador);
      while ((valorComputador < valorJogador) && (valorJogador <= 21)) //COMPRANDO CARTAS PRO PC 
         {
            computador.push(comprarCarta());
            stringComputador = nomeCartas (computador);
            valorComputador = calculoValor(computador);
         }      
      }
      quemVenceu (stringComputador, stringJogador)
}
else
{
   console.log ("O jogo acabou!!")
}