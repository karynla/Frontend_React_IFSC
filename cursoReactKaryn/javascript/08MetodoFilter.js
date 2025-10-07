const funcionarios = [
  { nome: "João", departamento: "TI", salario: 5000 },
  { nome: "Maria", departamento: "RH", salario: 4500 },
  { nome: "Pedro", departamento: "TI", salario: 6000 },
  { nome: "Ana", departamento: "Vendas", salario: 4000 },
];

// Funcionários de TI e diz o cargo
const equipeTI = funcionarios
  .filter((func) => func.departamento === "TI")
  .map((func) => ({ ...func, tipo: func.salario > 5000 ? "pleno" : "junior" }));
console.log(equipeTI);

// Salários acima da média
const salarioMedio =
  funcionarios.reduce((sum, func) => sum + func.salario, 0) /
  funcionarios.length;
const salarioAcimaDaMedia = funcionarios.filter(
  (func) => func.salario > salarioMedio
);

// Múltiplos critérios
const tiComSalarioAlto = funcionarios.filter(
  (func) => func.departamento === "TI" && func.salario > 5500
);

// Pipeline de transformação comum em React
const resultado = funcionarios
  .filter((func) => func.departamento === "TI")
  .map((func) => ({ nome: func.nome, salario: func.salario }));
