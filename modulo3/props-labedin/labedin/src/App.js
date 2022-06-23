import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotominha from './/imagens//pixelart.png';
import digitando from './/imagens//digitando.jpg';
import engenharia from './/imagens//engrenagem.png';
import imagememail from './/imagens//e-mail.png';
import casinha from './/imagens//casa.webp';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotominha}
          nome="Danielle Arantes" 
          descricao="Apaixonada por livros, jogos, resolver problemas e tudo o que faz pensar e deixa a imaginação fluir. "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={digitando}
          nome="Labenu" 
          descricao="Curso de Desenvolvedor Web Full Stack." 
        />
        
        <CardGrande 
          imagem={engenharia} 
          nome="Engenharia de Produção" 
          descricao="Bacharel em Engenharia de Produção - Universidade Federal de Uberlândia." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem={imagememail} 
          texto="artdanielle@hotmail.com" 
        /> 

        <CardPequeno
          imagem={casinha} 
          texto="Na rua dos bobos, número 0." 
        />     
      </div>
    </div>
  );
}

export default App;
