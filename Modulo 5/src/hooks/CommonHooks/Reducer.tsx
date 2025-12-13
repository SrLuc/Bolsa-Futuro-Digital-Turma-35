import React, { useReducer } from "react";

// Definindo o formato do estado
interface State {
  contador: number;
}

// Estado inicial
const estadoInicial: State = { contador: 0 };

// Tipos de ações possíveis
type Action =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "resetar" };

// Função reducer tipada
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    case "resetar":
      return { contador: 0 };
    default:
      return state;
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <p>Contador: {state.contador}</p>

      <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
      <button onClick={() => dispatch({ type: "resetar" })}>Resetar</button>
    </div>
  );
}

export default Contador;
