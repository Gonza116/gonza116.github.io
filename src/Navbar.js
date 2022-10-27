import "./Navbar.css";
import LanguageSelector from "./utils/LanguageSelector";
import DarkThemeToggle from "./utils/DarkThemeToggle";
import { useTranslation } from "react-i18next";
import Gregg from "./assets/Gregg.svg";

const Navbar = ({ home = false, setEventList }) => {
	const { t } = useTranslation();

	if (home) {
		return (
			<nav className="navbar-container">
				<div className="navbar-item">
					<LanguageSelector setEventList={setEventList} />
				</div>
				<div className="navbar-item">
					<DarkThemeToggle />
				</div>
				<div className="navbar-item">
					<a className="bold-link" href={"/#/tops/music"}>
						{t("tops-music")}
					</a>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="navbar-container not-home">
				<div className="navbar-item">
					<a href="/#">
						<img src={Gregg} alt="Gregg Logo" style={{ height: "3em" }} />
					</a>
				</div>
				<div className="navbar-item">
					<LanguageSelector />
				</div>
				<div className="navbar-item">
					<DarkThemeToggle />
				</div>
			</nav>
		);
	}
};

export default Navbar;
