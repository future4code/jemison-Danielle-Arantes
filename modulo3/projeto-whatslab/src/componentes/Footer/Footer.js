import React from 'react'
import styled from 'styled-components'

//ESTILIZAÇÕES
const PostFooter = styled.div`
  color: white;
  background-color: gray;
  width: 100vw;
  font-size: small;
  padding: 0.5% 0%;
  text-align: center;
  height: 2%;
  position: end;
  margin-bottom: 0px;

`
//FIM ESTILIZAÇÕES

//FUNÇÃO PRINCIPAL
function Footer(){
  return(
    <PostFooter>
        Copyright © 2022 Danielle Arantes Todos os direitos reservados. CEP: 38307-154.
    </PostFooter>
    
  )
}


export default Footer;