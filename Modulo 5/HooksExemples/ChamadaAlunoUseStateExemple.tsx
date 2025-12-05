import React, { useState } from "react";

function Chamada() {
  const alunos = ["Ana", "Bruno", "Carlos"];
  const [presentes, setPresentes] = useState([]);

  const marcarPresente = (nome) => {
    setPresentes([...presentes, nome]);
  };

  return (
    <div>
      <h2>Chamada:</h2>
      {alunos.map((aluno) => (
        <div key={aluno}>
          {aluno}{" "}
          {!presentes.includes(aluno) && (
            <button onClick={() => marcarPresente(aluno)}>Presente</button>
          )}
        </div>
      ))}
      <p>Alunos presentes: {presentes.join(", ") || "Nenhum"}</p>
    </div>
  );
}

export default Chamada;
