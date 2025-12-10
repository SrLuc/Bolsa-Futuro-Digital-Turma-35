import React, { useState } from "react"

const Contador = () => {

    const [presenca, setPresenca] = useState(0)

    return <div>
        <p>{presenca}</p>
        <button onClick={() => setPresenca(presenca + 1)}>
            Colocar Presença
        </button>
    </div>
}

export default Contador