const biblioteca = [
  { id: 1, titulo: "1984", autor: "George Orwell", ano: 1949 },
  { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { id: 3, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 },
];

// Encontrar livro por ID
const livro = biblioteca.find((livro) => livro.id === 2);
console.log(livro); // { id: 2, titulo: "Dom Casmurro", ... }

// Primeiro livro do século XX
const livroSeculoXX = biblioteca.find((livro) => livro.ano >= 1900);

// Verificar se existe (padrão comum)
const existeAutor = biblioteca.find(
  (livro) => livro.autor === "Machado de Assis"
);
console.log(existeAutor ? "Encontrado" : "Não encontrado");

// Combinando com findIndex para localização completa
const indiceOrwell = biblioteca.findIndex(
  (livro) => livro.autor === "George Orwell"
);
const livroOrwell = biblioteca.find((livro) => livro.autor === "George Orwell");
