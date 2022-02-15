import { useState } from "react";
import { setTheme } from "../utils/themes";
import "./Toggle.css";
import { useTranslation } from "react-i18next";

const Toggle = () => {
	const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
	const [togClass, setTogClass] = useState(
		userPrefersDark ? "alternate" : "default"
	);
	const { t } = useTranslation();
	// let theme = localStorage.getItem("theme");

	const handleOnClick = () => {
		if (togClass === "default") {
			setTogClass("alternate");
			setTheme("theme-alternate");
		} else {
			setTogClass("default");
			setTheme("theme-default");
		}
	};

	// useEffect(() => {
	// 	if (userPrefersDark) {
	// 		setTogClass("alternate");
	// 	} else {
	// 		setTogClass("default");
	// 	}
	// }, [userPrefersDark]);

	return (
		<div className="container--toggle">
			{togClass === "alternate" ? (
				<button className="toggle dark-mode" onClick={handleOnClick}>
					{userPrefersDark ? (
						<>
							{t("dark")} / <u>{t("light")}</u>
						</>
					) : (
						<>
							{t("light")} / <u>{t("dark")}</u>
						</>
					)}
				</button>
			) : (
				<button className="toggle dark-mode" onClick={handleOnClick}>
					{userPrefersDark ? (
						<>
							<u>{t("dark")}</u> / {t("light")}
						</>
					) : (
						<>
							<u>{t("light")}</u> / {t("dark")}
						</>
					)}
				</button>
			)}
			<label htmlFor="toggle" className="toggle--label">
				<span className="toggle--label-background"></span>
			</label>
		</div>
	);
};

export default Toggle;
