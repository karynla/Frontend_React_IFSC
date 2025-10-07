// Exemplos práticos de operadores

// Operadores de atribuição
let score = 100;
score += 50; // score = score + 50 → 150
score *= 2; // score = score * 2 → 300
score /= 3; // score = score / 3 → 100

// Operadores relacionais (importante: === vs ==)
console.log(5 == "5"); // true (conversão de tipo)
console.log(5 === "5"); // false (considera o tipo na conversao, nesse caso sao tipos diferentes)
console.log(null == undefined); // true
console.log(null === undefined); // false

// Operadores aritméticos
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a % b); // 1 (resto da divisão)
console.log(a ** b); // 1000 (10 elevado a 3)

// Operadores lógicos (short-circuit)
let user = { name: "Ana" };
let message = user && user.name && `Olá, ${user.name}!`;
console.log(message); // "Olá, Ana!"
