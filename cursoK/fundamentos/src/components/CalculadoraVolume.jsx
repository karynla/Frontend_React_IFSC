import { useState } from "react";

function CalculadoraVolume() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [numero3, setNumero3] = useState("");
  const [volume, setvolume] = useState(0);

  function calcularVolume() {
    const volumeCalculado = (
      parseFloat(numero1) *
      parseFloat(numero2) *
      parseFloat(numero3)
    ).toFixed(2);
    setvolume(volumeCalculado);
  }

  return (
    <div className="calculadora-container">
      <h2>Calculadora de Volume da Piscina</h2>
      <div className="input-group">
        <label>
          Comprimento:
          <input
            type="number"
            autoFocus
            onChange={(e) => setNumero1(e.target.value)}
            value={numero1}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Largura:
          <input
            type="number"
            onChange={(e) => setNumero2(e.target.value)}
            value={numero2}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Profundidade:
          <input
            type="number"
            onChange={(e) => setNumero3(e.target.value)}
            value={numero3}
          />
        </label>
      </div>
      <button className="calcular-button" onClick={calcularVolume}>
        Calcular Volume
      </button>
      <h2>Volume: {volume}</h2>
    </div>
  );
}

export default CalculadoraVolume;
