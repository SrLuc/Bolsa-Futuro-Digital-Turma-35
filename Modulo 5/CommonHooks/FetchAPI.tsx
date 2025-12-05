import React, { useState, useEffect } from "react";

interface iUsuario {
  id: number
  name: string
}

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<iUsuario[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setCarregando(false);
      })
      .catch(() => setCarregando(false));
  }, []);

  if (carregando) return <p>Carregando usuários...</p>;

  return (
    <div>
      <h2>Usuários:</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
