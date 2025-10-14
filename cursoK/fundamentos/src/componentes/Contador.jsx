function Contador() {
  {
    /*hook useState 
    declarando componente state
    dois valores devem ser passados, dentro de uma lista []
    primeiro (contator) nome do estado/state
    segundo (setContador) nome da funcao que deve alterar esse state
    usar set como padrao para funcao da state
    terceiro - = useState(valor de inicializacao)
    */
  }
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
    console.log(contador);
  }

  return (
    <div>
      Voce clicou {contador} vezes no botao
      <button onClick={handleClick}>Clique Aqui!</button>
    </div>
  );
}

{
  /* hook simples
  function Contador() {
  let contador = 0;
  function handleClick() {
    contador++;
    console.log(contador);
  }

  return (
    <div>
      Voce clicou {contador} vezes no botao
      <button onClick={handleClick}>Clique Aqui!</button>
    </div>
  );
}
*/
}

export default Contador;
