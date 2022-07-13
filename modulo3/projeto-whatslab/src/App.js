import React from 'react';
import styled from 'styled-components'
import Header from './componentes/Header/header'
import Footer from './componentes/Footer/Footer'
import Main from './componentes/Main/main';

//ESTILIZAÇÕES
const MainContainer = styled.div`
  background-color: white;
  margin-left: 20%;
  margin-right: 20%;
  height: 86.8%;

`

const Geral = styled.div`
  background-color: orange;
  height: 100vh;
  width: 100vw;
`
//FIM ESTILIZAÇÕES


//FUNÇÃO PRINCIPAL
function App() {
return(
  <Geral>
    <Header/>
    <MainContainer>
      <Main/>
    </MainContainer>
    <Footer/>
  </Geral>
  
);

}

export default App;
