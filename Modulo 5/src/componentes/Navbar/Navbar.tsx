import { Link, useLocation } from "react-router-dom";
import "./style.css";

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
