import { Link } from "react-router-dom"

const Navbar = () => {

    return <>
        <nav>
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile Page</Link></li>
                <li><Link to="/register">Register Page</Link></li>
            </ul>
        </nav>
    </>

}

export default Navbar