import { useEffect, useState } from "react";
import { setTheme } from "../utils/themes";
import "./Toggle.css";

const Toggle = () => {
	const [togClass, setTogClass] = useState("default");
	const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
	let theme = localStorage.getItem("theme");

	console.log("Toggle class => ", togClass);
	console.log("userPrefersDarl => ", userPrefersDark);

	const handleOnClick = () => {
		if (localStorage.getItem("theme") === "theme-default") {
			setTheme("theme-alternate");
			setTogClass("alternate");
		} else {
			setTheme("theme-default");
			setTogClass("default");
		}
	};

	useEffect(() => {
		if (localStorage.getItem("theme") === "theme-default") {
			setTogClass("default");
		} else if (localStorage.getItem("theme") === "theme-alternate") {
			setTogClass("alternate");
		}
	}, [theme]);

	return (
		<div className="container--toggle">
			{togClass === "alternate" ? (
				<button className="toggle dark-mode" onClick={handleOnClick}>
					<u>light</u> / dark
				</button>
			) : (
				<button className="toggle dark-mode" onClick={handleOnClick}>
					light / <u>dark</u>
				</button>
			)}
			<label htmlFor="toggle" className="toggle--label">
				<span className="toggle--label-background"></span>
			</label>
		</div>
	);
};

export default Toggle;
