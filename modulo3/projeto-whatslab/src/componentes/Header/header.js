import React from 'react'
import styled from 'styled-components'

//ESTILIZAÇÕES
const PostHeader = styled.div`
  background-color: white;
  height: 9%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    height: 100%;
  }
  p{
    font-size: xx-large;
    font-weight: bold;
  }
`
//FIM ESTILIZAÇÕES

//FUNÇÃO PRINCIPAL
function Header(){
return(
  <PostHeader>
    <img src="https://i.ytimg.com/an/_cy2msyfX-I6vXt0oxRGEg/featured_channel.jpg?v=62829fba" alt="Logo"/>
    <p>LabZap</p>
  </PostHeader>
)
}


export default Header