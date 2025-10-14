import "./App.css";
import MeuPrimeiroComponente from "./componentes/MeuPrimeiroComponente";
import Button from "./components/Button";
import ImagensReact from "./components/ImagensReact";

function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <p>Aprendendo React na pratica</p>

      <p>adicionando imagem</p>
      <img src="mo.jpeg" width="300px" alt="Quasal meio medico" />

      <p>javascript em JSX</p>
      {console.log("teste")}

      <MeuPrimeiroComponente />
      <Button />
      <ImagensReact />
    </>
  );
}

export default App;
