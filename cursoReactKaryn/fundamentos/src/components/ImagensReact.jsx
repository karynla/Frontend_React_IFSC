import imagemSrc from "../assets/images/oi.jpeg";

function ImagensReact() {
  return (
    <div>
      <h3>Imagem utilizada atraves da pasta public</h3>
      <img src="./images/oi.jpeg" width="300px" alt="" />

      <h3>Imagem utilizada atraves da pasta src</h3>
      <img src={imagemSrc} width="280" alt="" />
    </div>
  );
}

export default ImagensReact;
