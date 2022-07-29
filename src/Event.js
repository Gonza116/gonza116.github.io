import { useTranslation } from "react-i18next";
import "./Event.css";

const Event = ({ explanation, date, title, technologies, type, key }) => {
	const { t } = useTranslation();

	const getTechnologyBadges = () => {
		console.log(technologies);
		if (technologies) {
			return (
				<ul>
					{technologies.split(", ").map((it) => (
						<li>{it}</li>
					))}
				</ul>
			);
		} else {
			return null;
		}
	};
	return (
		<article className={type === "CURRENT" ? "event event-current" : "event"}>
			<div className="event-header">
				<time>{date}</time>
				{type === "CURRENT" && (
					<div className="event-current-badge">{t("currentOccupation")}</div>
				)}
			</div>
			<div
				className={
					type === "CURRENT" ? "event-body event-body-current" : "event-body"
				}
			>
				<h3>{title}</h3>
				{explanation}
				<h4 style={{ display: "none" }}>Technologies</h4>
				{getTechnologyBadges()}
			</div>
		</article>
	);
};

export default Event;
