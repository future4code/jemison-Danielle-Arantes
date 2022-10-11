import React from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {

  //navegação
  const navigate = useNavigate();

  const criarViagem = () => {
    navigate("/admin/trips/create")
  }

  const detalhesViagem = () => {
    navigate("/admin/trips/:id")
  }

  const logout = () => {
    navigate("/login")
  }

  const voltarPag = () => {
    navigate(-1)
  }

  //fim navegação

    return (
      <div>
        <p>ADMIN HOME PAGE</p>
        <button onClick={criarViagem}>Criar Viagem</button>
        <button onClick={detalhesViagem}>Detalhes da Viagem</button>
        <button onClick={logout}>Logout</button>
        <button onClick={voltarPag}>Voltar</button>
      </div>
    );
  }
  
  export default Admin;