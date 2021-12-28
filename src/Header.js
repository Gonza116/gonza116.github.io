import "./Header.css";
// import Toggle from "./utils/Toggle";
import LanguageSelector from "./utils/LanguageSelector";

const Header = ({ setEventList }) => {
  return (
    <div className="header-container">
      <div className="header-item">
        <LanguageSelector setEventList={setEventList} />
      </div>
      {/* <div className="header-item">
        <Toggle />
      </div> */}
    </div>
  );
};

export default Header;
