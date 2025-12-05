import React, { useState } from "react";

function AvisoAluno() {
  const [aviso, setAviso] = useState("Bem-vindo à escola!");

  return (
    <div>
      <h2>Aviso para o aluno:</h2>
      <p>{aviso}</p>
      <button onClick={() => setAviso("Não esqueça da tarefa de matemática!")}>
        Atualizar Aviso
      </button>
    </div>
  );
}

export default AvisoAluno;
