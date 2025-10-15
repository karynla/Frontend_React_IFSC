import style from "./MeuComponenteCSS.module.css";

function MeuComponenteModule() {
  return (
    <div>
      <h3 className={style.title}>titulo do meu componente com .module</h3>

      <h2 style={{ color: "purple", fontSize: "44px" }}>Usando CSS Inline</h2>
    </div>
  );
}

export default MeuComponenteModule;
