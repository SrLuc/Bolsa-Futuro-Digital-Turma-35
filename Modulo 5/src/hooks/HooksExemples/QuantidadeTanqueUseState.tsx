import React, { useState } from "react";

function InfoTanque() {
  const [quantidade, setQuantidade] = useState(1000); // litros
  const [acidez, setAcidez] = useState(6.5); // % de acidez

  const adicionarLeite = (litros) => {
    setQuantidade(quantidade + litros);
  };

  const atualizarAcidez = (novaAcidez) => {
    setAcidez(novaAcidez);
  };

  return (
    <div>
      <h2>Informações do tanque:</h2>
      <p>Quantidade: {quantidade} litros</p>
      <p>Acidez: {acidez}%</p>
      <button onClick={() => adicionarLeite(100)}>Adicionar 100L</button>
      <button onClick={() => atualizarAcidez(6.8)}>Atualizar Acidez para 6.8%</button>
    </div>
  );
}

export default InfoTanque;
