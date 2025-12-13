import React from "react";
import { useApi } from "./useApi";

// Interface dos dados da API
interface Usuario {
  id: number;
  name: string;
}

function Usuarios() {
  const { data, loading, erro } = useApi<Usuario[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <ul>
      {data?.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default Usuarios;
