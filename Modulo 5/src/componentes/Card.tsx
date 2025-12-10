import "./style.css"

interface Icard {
    key?: number;
    name: string,
    img: string
}

const Card = ({ name, img }: Icard) => {

    return <div className="card">

        <h1 >{name}</h1>
        <img src={img} alt="" />
    </div>
}


export default Card