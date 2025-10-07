// Destructuring de arrays
const cores = ["vermelho", "verde", "azul", "amarelo"];

// Extração básica
const [primeira, segunda, terceira] = cores;
console.log(primeira); // "vermelho"

// Pulando elementos
const [primaria, , terciaria] = cores;
console.log(terciaria); // "azul"

// Rest operator
const [principal, ...restantes] = cores;
console.log(restantes); // ["verde", "azul", "amarelo"]

// Valores padrão
const [a, b, c, d, e = "roxo"] = cores;

// Destructuring de objetos
const pessoa = {
  nome: "Maria Silva",
  idade: 30,
  profissao: "Designer",
  endereco: { cidade: "São Paulo", estado: "SP" },
};

// Extração simples
const { nome, idade, profissao } = pessoa;

// Renomeando variáveis
const { nome: nomeCompleto, idade: anos } = pessoa;

// Valores padrão
const { nome, telefone = "Não informado" } = pessoa;

// Destructuring aninhado
const {
  endereco: { cidade, estado },
} = pessoa;

// Em parâmetros de função
const apresentarPessoa = ({ nome, idade, profissao }) => {
  return `${nome}, ${idade} anos, trabalha como ${profissao}`;
};

// Troca de variáveis elegante
let a = 10,
  b = 20;
[a, b] = [b, a];
// console.log(a, b); // 20, 10
