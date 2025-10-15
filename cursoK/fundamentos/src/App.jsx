import "./App.css";
import Button from "./components/Button";
import CalculadoraMedia from "./components/CalculadoraMedia";
import CalculadoraVolume from "./components/CalculadoraVolume";
import ImagensReact from "./components/ImagensReact";
import MeuComponenteCSS from "./components/MeuComponenteCSS";
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
      <CalculadoraVolume />
      <MeuComponenteCSS />
      <h5 className="title">
        recebe o estilo do ultimo componente css, que esta sem o .module, o
        estilo vazou para os componente que vao ser rendedizados na
        sequencia/cascata (o aquivo css nao esta importado no App.jsx e sim no
        MeuComponenteCSS.jsx)
      </h5>

      <MeuComponenteModule />
    </>
  );
}

export default App;
