import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Form = styled.div`
  display: flex;
  margin: 2%;
  font-weight: bold;
  gap: 1vw;
`

function App() {

  //estados
  const [inputNome, setInputNome] = useState ("");
  const [inputIcon, setIcon] = useState ("");
  const [inputFotoPost, setFotoPost] = useState ("");
  const [postagem, setPostagem]= useState([ 
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: "danielle",
      fotoUsuario: "https://picsum.photos/20/50",
      fotoPost: "https://picsum.photos/210/150"
    },
    {
      nomeUsuario: 'victoria',
      fotoUsuario: 'https://picsum.photos/50/40',
      fotoPost: 'https://picsum.photos/200/130'
    }
  ])
  //fim estados

  //eventos
  const handleInputNome = (event) => {
    setInputNome(event.target.value)
  }

  const handleInputIcon = (event) => {
    setIcon(event.target.value)
  }

  const handleInputFotoPostagem = (event) => {
    setFotoPost(event.target.value)
  }

  const addPost = (e) => {
    e.preventDefault();

    const novoPost = {nomeUsuario: inputNome, fotoUsuario: inputIcon, fotoPost: inputFotoPost}
    const novaPostagem = [novoPost, ...postagem]
    setPostagem(novaPostagem)
  }
//fim eventos


  const postando = postagem.map((itens, indice) => {
    return <Post key={indice}
      nomeUsuario = {itens.nomeUsuario}
      fotoUsuario = {itens.fotoUsuario}
      fotoPost = {itens.fotoPost}
    />
  })

//resultado na na tela
return(
  <MainContainer>
    <Form>
      <label>Nome: </label>
      <input
        value={inputNome}
        onChange={handleInputNome}
      />

      <label>Foto do Icone: </label>
        <input
          value={inputIcon}
          onChange={handleInputIcon}
      />

      <label>Foto da Postagem: </label>
        <input
          value={inputFotoPost}
          onChange={handleInputFotoPostagem}
      />
      <button onClick={addPost}> Postar! </button>
    </Form>
    <p> Atenção: fotos devem ser adicionadas pela sua url!!</p>
    {postando}
  </MainContainer>
  
)

}


export default App;
