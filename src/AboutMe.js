import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import links from "./constants/links";
import Gregg from "./assets/Gregg.svg";

const AboutMe = () => {
	const { t } = useTranslation();
	return (
		<section className="about-me-container">
			<figure className="gregg-logo">
				<img src={Gregg} alt="Gregg Logo" style={{ height: "3em" }} />
			</figure>
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
