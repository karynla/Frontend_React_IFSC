// Comparação: função tradicional vs arrow function
// Função tradicional
function saudacao(nome) {
  return "Olá, " + nome + "!";
}

// Arrow function equivalente
const saudacao = (nome) => "Olá, " + nome + "!";

// Múltiplos parâmetros
const calcularArea = (largura, altura) => largura * altura;

// Função sem parâmetros
const obterDataAtual = () => new Date().toLocaleDateString();

// Para múltiplas linhas, use chaves e return
const processarPedido = (itens) => {
  const total = itens.reduce((sum, item) => sum + item.preco, 0);
  const desconto = total > 100 ? total * 0.1 : 0;
  return total - desconto;
};

// Retorno de objeto (use parênteses para evitar confusão com bloco)
const criarUsuario = (nome, idade) => ({ nome, idade, ativo: true });
