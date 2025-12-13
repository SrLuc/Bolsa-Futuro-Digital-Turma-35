import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link className={location.pathname === "/" ? "active" : ""} to="/">
        Home
      </Link>
      <Link
        className={location.pathname === "/students" ? "active" : ""}
        to="/students"
      >
        Students
      </Link>
      <Link
        className={location.pathname === "/create" ? "active" : ""}
        to="/create"
      >
        Create
      </Link>
    </nav>
  );
};

export default Navbar;
