import "./Navbar.css";
import LanguageSelector from "./utils/LanguageSelector";

const Navbar = ({ setEventList }) => {
  return (
    <nav className="navbar-container">
      <div className="navbar-item">
        <LanguageSelector setEventList={setEventList} />
      </div>
    </nav>
  );
};

export default Navbar;
