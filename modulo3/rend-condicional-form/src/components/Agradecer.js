import React, {useState} from 'react'
import styled from 'styled-components'


const Agradecimento = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    border: solid 0.5vh;
    border-radius: 2vh;
    padding-bottom: 5vh;

    p{
        font-size: x-large;
        font-weight: bold;
    }

`

function Agradecer() {
  return (
    <Agradecimento>
        <p>O Formulário Acabou!!</p>
        Obrigada por responder o questionário, entraremos em contato!!
    </Agradecimento>
  );
}

export default Agradecer;