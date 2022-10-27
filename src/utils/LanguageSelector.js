import i18n from "../i18n";
import { EventListES, EventListEN } from "../constants/eventList";
import { useState } from "react";
import "./Toggle.css";

const LanguageSelector = ({ setEventList }) => {
	const [userWantsSpanish, setUserWantsSpanish] = useState(
		navigator.language === "es-ES"
	);

	const changeLanguage = () => {
		setUserWantsSpanish(!userWantsSpanish);

		if (!userWantsSpanish) {
			i18n.changeLanguage("es");
			if (setEventList) {
				setEventList(EventListES);
			}
		} else {
			i18n.changeLanguage("en");
			if (setEventList) {
				setEventList(EventListEN);
			}
		}
	};
	return (
		<>
			<button className="toggle" onClick={changeLanguage}>
				{userWantsSpanish ? (
					<>
						en / <u>es</u>
					</>
				) : (
					<>
						<u>en</u> / es
					</>
				)}
			</button>
		</>
	);
};

export default LanguageSelector;
