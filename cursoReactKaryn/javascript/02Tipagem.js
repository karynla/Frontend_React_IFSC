let dados = 42;
console.log(typeof dados); // number

dados = "Hello World";
console.log(typeof dados); // String

dados = true;
console.log(typeof dados); // boolean

dados = { nome: "João" };
console.log(typeof dados); // object

// Tipos primitivos
let numero = 123; // number
let texto = "React"; // string
let ativo = true; // boolean
let indefinido; // undefined
let vazio = null; // nulo, cria um object (por padrão) {}
let grande = 123n; // bigint (grande inteiro, numero muito maior do que o number)
console.log(typeof grande);
