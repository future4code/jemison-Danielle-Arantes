import React from 'react'
import { useNavigate } from 'react-router-dom';

function Application() {

  //Navegação
  const navigate = useNavigate ()

  const voltarPag = () => {
    navigate(-1)
  }

  const voltarHome = () => {
    navigate("/")
  }
  //fim navegação

  const inscricaoFeita = () => {
    alert("Sucesso")
  }

    return (
      <div>
        <p>APPLICATION</p>
        <button onClick={inscricaoFeita}>Enviar</button>
        <button onClick={voltarPag}>Voltar</button>
        <button onClick={voltarHome}>Página Inicial</button>
      </div>
    );
  }
  
  export default Application;