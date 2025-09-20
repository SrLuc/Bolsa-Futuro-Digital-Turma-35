// ==============================
// Exercícios: Funções + Escopo + If/Else + Arrays (TypeScript enxuto)
// ==============================

// 1. Função simples
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

// 2. Função com retorno
function soma(a: number, b: number): number {
  return a + b;
}

// 3. Função tabuada
function tabuadas(num: number): string[] {
  let linhas: string[] = [];
  for (let i = 1; i <= 10; i++) {
    linhas.push(`${num} x ${i} = ${num * i}`);
  }
  return linhas;
}

// 4. Global x local
let mensagem: string = "Sou global";
function escopoExemplo(): string {
  let mensagem: string = "Sou local";
  return mensagem;
}

// 5. Alterando global
let contador: number = 0;
function incrementar(): number {
  contador++;
  return contador;
}

// 6. Proteção de escopo
function escopoLocal(): string {
  let local: string = "Variável local";
  return local;
}

// 7. If com let
function testeLet(): string {
  if (true) {
    let dentroDoIf: string = "Sou let";
    return dentroDoIf;
  }
  return "Fora do bloco";
}

// 8. If com var
function testeVar(): string {
  if (true) {
    var dentroDoIfVar: string = "Sou var";
  }
  return dentroDoIfVar; // acessível fora do bloco
}

// 9. Const em bloco
function testeConst(): string {
  if (true) {
    const constante: number = 42;
    return `Dentro do bloco: ${constante}`;
  }
  return "Não acessível fora do bloco";
}

// 10. Par ou ímpar
function parOuImpar(num: number): string {
  return num % 2 === 0 ? "Par" : "Ímpar";
}

// 11. Maior de idade
function verificarIdade(idade: number): string {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

// 12. Média de notas
function mediaNotas(n1: number, n2: number, n3: number): string {
  const media: number = (n1 + n2 + n3) / 3;
  return media >= 7 ? "Aprovado" : "Reprovado";
}

// 13. Maior número
function maiorNumero(arr: number[]): number {
  let maior: number = arr[0];
  for (let num of arr) {
    if (num > maior) maior = num;
  }
  return maior;
}

// 14. Somar array
function somaArray(arr: number[]): number {
  let soma: number = 0;
  for (let num of arr) soma += num;
  return soma;
}

// 15. Filtrar pares
function filtrarPares(arr: number[]): number[] {
  let pares: number[] = [];
  for (let num of arr) {
    if (num % 2 === 0) pares.push(num);
  }
  return pares;
}

// 16. Procurar item
function procurarItem(arr: string[], item: string): string {
  return arr.includes(item) ? "Encontrado" : "Não encontrado";
}

// 17. Carrinho de compras
type Produto = { nome: string; preco: number };

function totalCarrinho(produtos: Produto[]): number {
  let total: number = 0;
  for (let p of produtos) total += p.preco;
  return total;
}

// 18. Lista de tarefas - adicionar
let tarefas: string[] = ["Estudar", "Treinar"];
function adicionarTarefa(novaTarefa: string): void {
  tarefas.push(novaTarefa);
}

// 19. Remover da lista
function removerTarefa(tarefa: string): void {
  const index: number = tarefas.indexOf(tarefa);
  if (index !== -1) tarefas.splice(index, 1);
}

// 20. Contar maiores que 10
function contarMaioresQue10(arr: number[]): number {
  let count: number = 0;
  for (let num of arr) {
    if (num > 10) count++;
  }
  return count;
}

// ==============================
// Testes organizados
// ==============================

console.log(saudacao("Rickelme"));
console.log("Soma:", soma(5, 3));
console.log("Tabuada do 7:", tabuada(7));
console.log("Escopo exemplo:", escopoExemplo());
console.log("Mensagem global:", mensagem);
console.log("Incrementos:", incrementar(), incrementar());
console.log("Escopo local:", escopoLocal());
console.log("Teste let:", testeLet());
console.log("Teste var:", testeVar());
console.log("Teste const:", testeConst());
console.log("Par ou ímpar (7):", parOuImpar(7));
console.log("Idade 20:", verificarIdade(20));
console.log("Média (8,6,9):", mediaNotas(8, 6, 9));
console.log("Maior número:", maiorNumero([3, 7, 2, 10, 5]));
console.log("Soma array:", somaArray([1, 2, 3, 4, 5]));
console.log("Filtrar pares:", filtrarPares([1, 2, 3, 4, 5, 6]));
console.log("Procurar item (Bia):", procurarItem(["Ana", "Bia", "Carlos"], "Bia"));
console.log("Total carrinho:", totalCarrinho([
  { nome: "Arroz", preco: 10 },
  { nome: "Feijão", preco: 7 },
  { nome: "Leite", preco: 5 }
]));
adicionarTarefa("Dormir");
console.log("Tarefas:", tarefas);
removerTarefa("Treinar");
console.log("Tarefas após remoção:", tarefas);
console.log("Maiores que 10:", contarMaioresQue10([5, 11, 20, 3, 15]));
