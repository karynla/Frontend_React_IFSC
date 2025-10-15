import style from "./MeuComponenteCSS.module.css";

function MeuComponenteModule() {
  return (
    <div>
      <h3 className={style.title}>titulo do meu componente com .module</h3>
    </div>
  );
}

export default MeuComponenteModule;
