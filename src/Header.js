import "./Header.css";
import Toggle from "./utils/Toggle";
import LanguageSelector from "./utils/LanguageSelector";

const Header = ({ setEventList }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <LanguageSelector setEventList={setEventList} />
      </div>
      <div className="header-centre"></div>
      <div className="header-right">
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
