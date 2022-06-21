import perfil from './/pixelart.png';
import './App.css';

function App() {

  const onClickBotao = () => {
    alert('Aeeee energias positivas enviadas, ótima dia pra você!')
  }

  return (
    <div className="App">
      <h1>Olá! Eu sou a Danielle Arantes.</h1>
      <img id="imagem" src={perfil} alt="Imagem em pixel de uma mulher de cabelos escuros." />
      <p>Estou no horário de trabalho tentando aprender react, clique no botão abaixo se quiser mandar boas energias!</p>
      <button onClick={onClickBotao}>NAMASTE!!!</button>
    </div>
  );
}

export default App;
