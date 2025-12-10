
import React, { useEffect, useState } from "react"

const MensagemDeAlerta = () => {

    const [efeito, setEfeito] = useState(0)

    useEffect(() => {
        alert("Componente Montado Na TELA!")
        console.log("componente montado")
    }, [efeito])

    return <div>
        <p>Veja o alerta ao montar o componente!</p>
        <button onClick={() => setEfeito(efeito + 1)}>Autalizar estado e efeito</button>
        {efeito}
    </div>
}

export default MensagemDeAlerta