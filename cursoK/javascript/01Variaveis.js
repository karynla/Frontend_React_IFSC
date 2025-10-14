//Exemplo de declaracao de variaveis

// var - caiu em desuso por ter problemas de escopo
var nome = "karyn";
var nome = "lais";
console.log(nome);

// let - valor pode ser alterado posteriormente
let curso = "Javascript";
// let curso = "React"; A partir do ES6 a redeclaracao nao e mais permitida
curso = "React";
console.log(curso);

// const - valor nao pode ser alterado depois da variavel ser inicializada
const usuario = "Maria";
// usuario = "ka"; constante nao pode ser alterada

// porem const aceita que se altere valores de objetos em js
const turma = { nome: "Turma01", alunos: 90 };
turma.alunos = 100;
console.log(turma);
