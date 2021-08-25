import "./Header.css";
import Toggle from "./utils/Toggle";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="Header">
        <p className="OverTitle">Hola, soy</p>
        <h1 className="Title">Gonzalo García Granés</h1>
        <p className="UnderTitle">Desarrollador fullstack, entre otras cosas</p>
      </div>
      <Toggle />
    </div>
  );
};

export default Header;
