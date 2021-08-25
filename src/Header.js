import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <p className="OverTitle">Hola, soy</p>
      <h1 className="Title">Gonzalo García Granés</h1>
      <p className="UnderTitle">Desarrollador fullstack, entre otras cosas</p>
      <Link to="link-test">Test routing</Link>
    </div>
  );
};

export default Header;
