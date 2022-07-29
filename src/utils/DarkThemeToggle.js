import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Toggle.css";

const DarkThemeToggle = () => {
	const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
	const [togClass, setTogClass] = useState(
		userPrefersDark.matches ? "dark" : "default"
	);
	const { t } = useTranslation();

	const handleOnClick = () => {
		if (togClass === "default") {
			setTogClass("dark");
		} else {
			setTogClass("default");
		}
	};

	document.documentElement.setAttribute("data-theme", togClass);

	userPrefersDark.addEventListener("change", () => {
		setTogClass(userPrefersDark.matches ? "dark" : "default");
	});

	return (
		<>
			<button className="toggle" onClick={handleOnClick}>
				{togClass === "default" ? (
					<>
						<u>{t("light")}</u> / {t("dark")}
					</>
				) : (
					<>
						{t("light")} / <u>{t("dark")}</u>
					</>
				)}
			</button>
		</>
	);
};

export default DarkThemeToggle;
