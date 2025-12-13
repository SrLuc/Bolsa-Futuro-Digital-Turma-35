import React, { useState, useEffect } from "react";

function ListaAlunos() {
  // Estado da lista de alunos
  const [alunos, setAlunos] = useState(["João", "Maria", "Pedro"]);
  // Estado do input para adicionar novo aluno
  const [novoAluno, setNovoAluno] = useState("");

  // useEffect executa sempre que a lista de alunos mudar
  useEffect(() => {
    console.log("Lista de alunos atualizada:", alunos);
  }, [alunos]);

  // Função para adicionar aluno
  const adicionarAluno = () => {
    if (novoAluno.trim() !== "") {
      setAlunos([...alunos, novoAluno.trim()]); // Atualiza o estado da lista
      setNovoAluno(""); // Limpa o input
    }
  };

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>{aluno}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Novo aluno"
        value={novoAluno}
        onChange={(e) => setNovoAluno(e.target.value)}
      />
      <button onClick={adicionarAluno}>Adicionar Aluno</button>
    </div>
  );
}

export default ListaAlunos;
