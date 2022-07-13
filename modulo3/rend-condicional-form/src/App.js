import React, { useState } from 'react';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Agradecer from './components/Agradecer';


const Conteudo = styled.div `
  display: flex;
  flex-direction: column;
  gap: 3vh;

`
function App() {
  const [etapaNumero, setEtapaNumero] = useState (1);

  const handleRenderizarEtapa = () => {
      setEtapaNumero()
  }

  const renderizarEtapa = () => {
    switch(etapaNumero){
      case 1:
        return <Etapa1/>;
        break;
  
      case 2:
        return <Etapa2/>;
        break;
  
      case 3:
        return <Etapa3/>;
        break;
      
      case 4:
        return <Agradecer/>;
        break;
        
      default:
        break;
    }
    
  }

  return (
    <Conteudo>
      <button onClick={handleRenderizarEtapa}>Próxima etapa</button>
      {renderizarEtapa}
    </Conteudo>
  );
}

export default App;
