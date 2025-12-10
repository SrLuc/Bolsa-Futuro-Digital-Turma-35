import { useState, useEffect } from "react"
import Card from "../componentes/Card"

interface Ichar {
    id: number,
    name: string,
    image: string
}

const Home = () => {

    //primeiro hook sendo usado 
    const [quote, setQuote] = useState<Ichar[]>([])

    useEffect(() => {
        //para trocar de API, basta substituir este link por outro link de outra API;
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())

            //data.results pode ser substituido por outro nome de acordo com a API que estas utilizando
            .then(data => setQuote(data.results))
            .then
    }, [])


    return <div>
        <h1>Consumindo Dados de uma API</h1>
        {quote.map(u => <Card img={u.image} name={u.name} key={u.id} />)}
    </div>
}

export default Home