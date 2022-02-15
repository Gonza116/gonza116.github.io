import "./Navbar.css";
import LanguageSelector from "./utils/LanguageSelector";
import Toggle from "./utils/Toggle";

const Navbar = ({ setEventList }) => {
	return (
		<nav className="navbar-container">
			<div className="navbar-item">
				<LanguageSelector setEventList={setEventList} />
			</div>
			<div className="navbar-item">
				<Toggle />
			</div>
		</nav>
	);
};

export default Navbar;
