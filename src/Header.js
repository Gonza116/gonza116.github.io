import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="App">
      <p>Hola, soy</p>
      <h1>Gonzalo García Granés</h1>
      <p>Desarrollador fullstack, entre otras cosas</p>
      <Link to="link-test">Test routing</Link>
    </div>
  );
};

export default Header;
