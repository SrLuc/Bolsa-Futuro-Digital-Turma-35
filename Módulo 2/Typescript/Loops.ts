// ==============================
// Exercícios: Loops + Arrays
// ==============================

// 🔁 Loops (for e while)

// 1. For simples: imprimir de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. While simples: contagem regressiva de 10 até 0
let cont = 10;
while (cont >= 0) {
  console.log(cont);
  cont--;
}

// 3. Somatório com for: soma de 1 a 100
let somaFor: number = 0;
for (let i = 1; i <= 100; i++) {
  somaFor += i;
}
console.log("Soma de 1 a 100:", somaFor);

// 4. Somatório com while: soma dos pares de 1 a 50
let somaPares: number = 0;
let num = 1;
while (num <= 50) {
  if (num % 2 === 0) somaPares += num;
  num++;
}
console.log("Soma dos pares até 50:", somaPares);

// 5. Tabuada com for
function tabuada(n: number): void {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
tabuada(7);

// 📦 Arrays (criar, acessar, modificar)

// 6. Criando array de nomes
let nomes: string[] = ["Ana", "Bia", "Carlos", "Daniel", "Eva"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// 7. Acessando elementos
let frutas: string[] = ["Maçã", "Banana", "Laranja", "Uva"];
console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);

// 8. Adicionar elemento no final
let tarefas2: string[] = ["Estudar", "Treinar"];
tarefas2.push("Dormir");
console.log("Tarefas:", tarefas2);

// 9. Remover último elemento
tarefas2.pop();
console.log("Tarefas após pop:", tarefas2);

// 10. Remover do início
tarefas2.shift();
console.log("Tarefas após shift:", tarefas2);

// 11. Adicionar no início
tarefas2.unshift("Ler");
console.log("Tarefas após unshift:", tarefas2);

// 12. Percorrer com while (mostrar pares)
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i < numeros.length) {
  if (numeros[i] % 2 === 0) {
    console.log("Par:", numeros[i]);
  }
  i++;
}

// 13. Percorrer com for (strings maiúsculas)
let palavras: string[] = ["javascript", "typescript", "frontend"];
for (let p of palavras) {
  console.log(p.toUpperCase());
}

// 14. Array de objetos
type Produto2 = { nome: string; preco: number };
let produtos: Produto2[] = [
  { nome: "Arroz", preco: 10 },
  { nome: "Feijão", preco: 7 },
  { nome: "Leite", preco: 5 },
];
for (let p of produtos) {
  console.log("Produto:", p.nome);
}

// 15. Filtrar array (idades >= 18)
let idades: number[] = [12, 17, 18, 20, 15, 30];
let maiores: number[] = [];
for (let idade of idades) {
  if (idade >= 18) maiores.push(idade);
}
console.log("Maiores de idade:", maiores);
