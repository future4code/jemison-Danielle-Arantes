import React from 'react'
import { useNavigate } from 'react-router-dom';

function Trip() {
  //navegacao
  const navigate = useNavigate()
  
  const voltarPag = () => {
    navigate(-1)
  }
  //fim navegacao

    return (
      <div>
        <p>TRIPS DETAILS</p>
        <button onClick={voltarPag}>Voltar</button>
        
      </div>
    );
  }
  
  export default Trip;