import "./App.css";
import Button from "./components/Button";
import CalculadoraMedia from "./components/CalculadoraMedia";
import ImagensReact from "./components/ImagensReact";
import MeuPrimeiroComponente from "./components/MeuPrimeiroComponente";

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
      <CalculadoraMedia />
    </>
  );
}

export default App;
