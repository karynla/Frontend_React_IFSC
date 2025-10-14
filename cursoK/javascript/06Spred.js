// Expandindo arrays
const frutas = ["maçã", "banana", "laranja"];
const vegetais = ["alface", "tomate", "cenoura"];

// Combinando arrays
const alimentos = [...frutas, ...vegetais];
console.log(alimentos); // ["maçã", "banana", "laranja", "alface", "tomate", "cenoura"]

// Copiando arrays (cópia superficial)
const frutasCopia = [...frutas];
frutasCopia.push("uva");
console.log(frutas); // Array original inalterado

// Passando array como parâmetros
// biblioteca Math e nativa do node.js
//metodo Math.max retorna o maior numero da array
const numeros = [5, 2, 8, 1, 9];
console.log(Math.max(...numeros)); // 9

// Expandindo objetos
const enderecoBase = { cidade: "São Paulo", estado: "SP" };
const usuarioCompleto = {
  nome: "Ana Silva",
  idade: 32,
  ...enderecoBase,
  profissao: "Desenvolvedora",
};

// Função com parâmetros variáveis (passar a copia de uma lista para a funcao, atraves do Spred)
const calcularMedia = (...notas) => {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
};
