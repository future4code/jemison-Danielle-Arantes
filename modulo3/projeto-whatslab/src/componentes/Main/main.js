import React from 'react'
import styled from 'styled-components'

//ESTILIZAÇÕES
const PostMain = styled.div`
  background-color: white;
  width: 100%;
  
`

const Form = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.5%;
  
  .menor{
    width: 25%;
  }
  .maior{
    width: 65%;
  }
`
//FIM ESTILIZAÇÕES


//FUNÇÃO PRINCIPAL
function Main(){


  return(
    <PostMain>
      <Form>
        <input className="menor"
          placeholder='Remetente'
          value=""
        />
        <input className="maior"
          placeholder='Mensagem'
          value=""
        />
        <button>Enviar!</button>
      </Form>
    </PostMain>
  )
}


export default Main