import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Event from "./Event";
import "./Timeline.css";

const getFilteredEvents = (EventList, filter) => {
	switch (filter) {
		case "STAGE_1":
			return EventList.filter((listedEvent) => listedEvent.type === "CURRENT");
		case "STAGE_2":
			return EventList.filter(
				(listedEvent) =>
					listedEvent.type === "CURRENT" || listedEvent.type === "WORK"
			);
		case "STAGE_3":
			return EventList.filter(
				(listedEvent) =>
					listedEvent.type === "CURRENT" ||
					listedEvent.type === "WORK" ||
					listedEvent.type === "STUDIES"
			);
		case "STAGE_4":
			return EventList;
		default:
			break;
	}
	return EventList;
};

const Timeline = ({ EventList }) => {
	const [events, setEvents] = useState(getFilteredEvents(EventList, "ALL"));
	const [stage, setStage] = useState("STAGE_1");
	const { t } = useTranslation();

	useEffect(() => {
		setEvents(getFilteredEvents(EventList, stage));
	}, [stage, EventList]);

	const getMoreButton = () => {
		switch (stage) {
			case "STAGE_1":
				return (
					<button
						className="timeline-more-button"
						onClick={() => {
							setStage("STAGE_2");
						}}
					>
						{t("stage-1-more")}
					</button>
				);
			case "STAGE_2":
				return (
					<button
						className="timeline-more-button"
						onClick={() => {
							setStage("STAGE_3");
						}}
					>
						{t("stage-2-more")}
					</button>
				);
			case "STAGE_3":
				return (
					<button
						className="timeline-more-button"
						onClick={() => {
							setStage("STAGE_4");
						}}
					>
						{t("stage-3-more")}
					</button>
				);

			default:
				break;
		}
	};

	return (
		<>
			{events.map((listedEvent, index) => {
				return (
					<Event
						{...listedEvent}
						key={index}
						isFinal={index === events.length - 1}
					/>
				);
			})}
			{getMoreButton()}
		</>
	);
};

export default Timeline;
