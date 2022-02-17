import "./Navbar.css";
import LanguageSelector from "./utils/LanguageSelector";
import DarkThemeToggle from "./utils/DarkThemeToggle";

const Navbar = ({ setEventList }) => {
	return (
		<nav className="navbar-container">
			<div className="navbar-item">
				<LanguageSelector setEventList={setEventList} />
			</div>
			<div className="navbar-item">
				<DarkThemeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
