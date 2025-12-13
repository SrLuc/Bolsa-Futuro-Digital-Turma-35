import React, { useState } from "react";

function TemperaturaTanque() {
  const [temperatura, setTemperatura] = useState(4); // Temperatura em °C

  return (
    <div>
      <h2>Temperatura do tanque:</h2>
      <p>{temperatura}°C</p>
      <button onClick={() => setTemperatura(5)}>Atualizar para 5°C</button>
      <button onClick={() => setTemperatura(3)}>Atualizar para 3°C</button>
    </div>
  );
}

export default TemperaturaTanque;
