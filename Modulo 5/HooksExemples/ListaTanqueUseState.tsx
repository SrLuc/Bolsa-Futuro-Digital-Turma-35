import React, { useState } from "react";

function ListaTanques() {
  const [tanques, setTanques] = useState([
    { id: 1, nome: "Tanque A", temperatura: 4 },
    { id: 2, nome: "Tanque B", temperatura: 5 },
  ]);
  const [novoTanque, setNovoTanque] = useState("");

  const adicionarTanque = () => {
    if (novoTanque.trim() !== "") {
      const novo = {
        id: tanques.length + 1,
        nome: novoTanque,
        temperatura: 4, // temperatura padrão
      };
      setTanques([...tanques, novo]);
      setNovoTanque("");
    }
  };

  return (
    <div>
      <h2>Lista de tanques:</h2>
      <ul>
        {tanques.map((tanque) => (
          <li key={tanque.id}>
            {tanque.nome} - Temperatura: {tanque.temperatura}°C
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={novoTanque}
        onChange={(e) => setNovoTanque(e.target.value)}
        placeholder="Nome do novo tanque"
      />
      <button onClick={adicionarTanque}>Adicionar Tanque</button>
    </div>
  );
}

export default ListaTanques;
