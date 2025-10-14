function Button() {
  function handleClick() {
    alert("voce clicou no botao");
  }

  return (
    <div>
      <p>mais um bloquinho </p>
      <p>exemplo botao</p>
      <button onClick={handleClick}>butau</button>
    </div>
  );
}

export default Button;
