/*
console.log ("Boas vindas ao jogo de BlackJack!")

if(confirm("Você quer iniciar uma nova rodada?")) 
{
	console.log ("Que os jogos começem!")
   const jogador1 = comprarCarta();
   const jogador2 = comprarCarta();
   const computador1 = comprarCarta();
   const computador2 = comprarCarta();
   const valorJogador = (jogador1.valor) + (jogador2.valor);
   const valorComputador = (computador1.valor) + (computador2.valor);

   console.log (`Usuário - cartas: ${jogador1.texto} e ${jogador2.texto} - pontuação é de ${valorJogador}`);
   console.log (`Computador - cartas: ${computador1.texto} e ${computador2.texto} - pontuação é de ${valorComputador}`);

   if ((valorJogador > 21) && (valorComputador > 21)) 
   {
      console.log ("Empate, ambos ultrapassaram 21!!");
   } 
   else if (valorComputador > 21)
   {
      console.log ("O usuário ganhou!!!!");
   }
   else if (valorJogador > 21)
   {
      console.log ("O computador ganhou!!!!");
   }
   else
   {
      if (valorJogador > valorComputador) 
      {
         console.log ("O usuário ganhou!!!!");
      } 
      else if (valorComputador > valorJogador)
      {
         console.log ("O computador ganhou!!!!");
      }
      else
      {  
      console.log ("Empate!!!");
      }
   }
} 
else 
{
	console.log ("O jogo acabou!")
}
*/