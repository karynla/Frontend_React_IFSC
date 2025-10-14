const numeros = [2, 3, 4, 5, 7];
// metodo cria loop com cada elemento da lista, usando a instrucao indicada
// nesse caso pega cada numero, um por vez, e multiplica ele por ele mesmo
const quadrados = numeros.map((num) => num * num);
console.log(quadrados);

// array de objetos
const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 150 },
  { nome: "Teclado", preco: 230 },
];

// extraindo apenas o nome dos objetos
const nomesProdutos = produtos.map((prod) => prod.nome);
console.log(nomesProdutos);

// Extraindo apenas os precos
const nomesPreco = produtos.map((produto) => produto.preco);
console.log(nomesPreco);

// Aplicando transformações complexas
const produtosComDesconto = produtos.map((produto) => ({
  ...produto,
  precoPromocional: produto.preco * 0.9,
  categoria: produto.preco > 100 ? "Premium" : "Básico",
}));

// Uso típico em React para renderização
const listaHTML = produtos.map(
  (produto, index) =>
    `<li key="${index}">${produto.nome} - R$ ${produto.preco}</li>`
);
console.log(listaHTML);
