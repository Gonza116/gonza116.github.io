import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import links from "./constants/links";
import Gregg from "./assets/Gregg.svg";
import { useState } from "react";

const AboutMe = () => {
	const { t } = useTranslation();

	const [talk, setTalk] = useState(0);
	const quotes = [
		"The enemy gate is down (Ender's Game)",
		"If what I think it's happening is happening, it better not be (Fantastic Mr. Fox)",
		"You gotta do it every day - that's the hard part. But it does get easier. (BoJack Horseman)",
		"I believe in a universe that doesn't care and in people who do (Night In The Woods)",
		"If I showed my fangs, would you tell me that they're cool? (Laura Les - Haunted)",
		"Got my invitation to eternal damnation (Rina Sawayama - This Hell)",
		"Psycho, priceless, good in a crisis (Caroline Polacheck - Billions)",
		"And I want to know what would happen if I surrender to the sound (Phoebe Bridgers - Motion Sickness)",
		"Nothing is forever, lucky to remember, stay up in the moment (Charli XCX - Twice)",
		"Small things become big. Winter turns to spring. One thing always changes into another. (Brother Bear)",
	];
	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	return (
		<section className="about-me-container">
			<div className="talking-fox">
				{talk > 0 && <p className="bubble">{quote}</p>}
				<figure
					className="gregg-logo"
					onClick={() => {
						setTalk(talk + 1);
					}}
				>
					<img src={Gregg} alt="Gregg Logo" style={{ height: "3em" }} />
				</figure>
			</div>

			<div>
				<p>
					{t("title-p1-1")}{" "}
					<span className="about-me-name">Gonzalo García Granés</span>{" "}
					{t("title-p1-prons")} {t("title-p1-2")} {t("title-p1-3")}
				</p>
				<p>
					{t("title-p2-1")}{" "}
					<a target="_blank" rel="noreferrer" href={links.GitHub}>
						GitHub
					</a>{" "}
					{t("title-p2-2")}{" "}
					<a href={links.CV} target="_blank" rel="noreferrer">
						{t("title-p2-3")}
					</a>
					.
				</p>
				<p>
					{t("title-p3-1")}{" "}
					<a href={links.Mail} target="_blank" rel="noreferrer">
						{t("title-p3-2")}
					</a>{" "}
					{t("title-p3-3")}{" "}
					<a href={links.LinkedIn} target="_blank" rel="noreferrer">
						LinkedIn
					</a>
					.
				</p>
			</div>
		</section>
	);
};

export default AboutMe;
