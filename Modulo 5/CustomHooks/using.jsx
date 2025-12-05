import React from "react";
import useApi from "./useApi";

function Usuarios() {
  const { data: usuarios, loading, erro } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>Erro ao carregar usuários</p>;

  return (
    <ul>
      {usuarios.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default Usuarios;
