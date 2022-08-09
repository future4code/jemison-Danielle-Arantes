import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  //navegação
  const navigate = useNavigate ()
  const logarConta = () => {
    navigate("/admin/trips/list")
  }
  const voltarPag = () => {
    navigate(-1)
  }
  //fim navegacao
  
    return (
      <div>
        <p>LOGIN</p>
        <button onClick={logarConta}>Entrar</button>
        <button onClick={voltarPag}>Voltar</button>
      </div>
    );
  }
  
  export default Login;