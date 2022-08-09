import React from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

  //navegação
  const navigate = useNavigate()

  const voltarPag = () => {
    navigate(-1)
  }
  const voltarHome = () => {
    navigate("/")
  }
  //fim navegação

  const viagemCriada = () => {
    alert("Sucesso")
  }

    return (
      <div>
        <p>CREATE TRIP</p>
        <button onClick={viagemCriada}>Enviar</button>
        <button onClick={voltarPag}>Voltar</button>
        <button onClick={voltarHome}>Página Inicial</button>
      </div>
    );
  }
  
  export default Create;