import i18n from "../i18n";
import { EventListES, EventListEN } from "../constants/eventList";
import "./LanguageSelector.css";

const LanguageSelector = ({ setEventList }) => {
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		if (lng === "es") {
			setEventList(EventListES);
		} else {
			setEventList(EventListEN);
		}
	};
	return (
		<div className="container--toggle">
			{i18n.language === "es" ? (
				<button
					className="toggle"
					onClick={() => {
						changeLanguage("en");
					}}
				>
					<u>es</u> / en
				</button>
			) : (
				<button
					className="toggle"
					onClick={() => {
						changeLanguage("es");
					}}
				>
					es / <u>en</u>
				</button>
			)}
			<label htmlFor="toggle" className="toggle--label">
				<span className="toggle--label-background"></span>
			</label>
		</div>
	);
};

export default LanguageSelector;
