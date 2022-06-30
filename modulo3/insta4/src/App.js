import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>

    <Post
      nomeUsuario={'paulinha'}
      fotoUsuario={'https://picsum.photos/50/50'}
      fotoPost={'https://picsum.photos/200/150'}
    />

    <Post
      nomeUsuario={'danielle'}
      fotoUsuario={'https://picsum.photos/20/50'}
      fotoPost={'https://picsum.photos/210/150'}
    />

    <Post
      nomeUsuario={'victoria'}
      fotoUsuario={'https://picsum.photos/50/40'}
      fotoPost={'https://picsum.photos/200/130'}
    />

  </MainContainer>
  
)

}


export default App;
