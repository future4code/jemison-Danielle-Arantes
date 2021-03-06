import React, {useState} from 'react'
import styled from 'styled-components'


const ESuperior = styled.div `
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

function Etapa2() {
  return (
    <ESuperior>
        <p>ETAPA 2 - Informações Educacionais Ensino Superior</p>
        <label>1. Qual o curso?</label>
        <input value=""/>

        <label>2. Qual a unidade de ensino?</label>
        <input value=""/>
    </ESuperior>
  );
}

export default Etapa2;