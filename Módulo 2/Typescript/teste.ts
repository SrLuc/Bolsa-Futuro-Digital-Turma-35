



// Função para entregar encomenda
function entregarEncomenda(pessoa1: string, pessoa2: string) {
  if (pessoa1 === "ruan" && pessoa2 === "maria") {
    console.log("Entrega realizada com sucesso!");
  } else {
    console.log("Entrega não realizada.");
  }
}

entregarEncomenda("ruan", "maria");
entregarEncomenda("joão", "maria");

