import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

  //navegação
  const navigate = useNavigate()

  const verListaViagens = () => {

    navigate("/trips/list")

  }

  const areaAdm = () => {

    navigate("/admin/trips/list")

  }
  //fim navegação

    return (
      <div>
        <p>HOME PAGE</p>
        <button onClick={verListaViagens}>Lista de Viagens</button>
        <button onClick={areaAdm}>Aréa Administrativa</button>
      </div>
    );
  }
  
  export default Home;