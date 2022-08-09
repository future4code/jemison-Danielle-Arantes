import React from 'react'
import { useNavigate } from 'react-router-dom';

function List() {

  //navegação
  const navigate = useNavigate()
  
  const voltarPag = () => {
    navigate(-1)
  }
  const inscricaoViagem = () => {
    navigate("/trips/application")
  } 
  //fim navegação
  
    return (
      <div>
        <p>LIST TRIPS</p>
        <button onClick={voltarPag}>Voltar</button>
        <button onClick={inscricaoViagem}>Inscreva-se</button>
      </div>
    );
  }
  
  export default List;