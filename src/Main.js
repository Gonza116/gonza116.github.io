import { useState } from "react";
import { EventListEN, EventListES } from "./constants/eventList";
import AboutMe from "./AboutMe";
import Timeline from "./Timeline";
import Swirl from "./Swirl";
import Navbar from "./Navbar";
import "./Main.css";

const Main = () => {
	const [EventList, setEventList] = useState(
		navigator.language === "es-ES" ? EventListES : EventListEN
	);

	return (
		<>
			<header>
				<h1 style={{ display: "none" }}>Gonzalo García Granés</h1>
				<Navbar home setEventList={setEventList} />
				<AboutMe />
				<Swirl />
			</header>

			<main className="timeline-section">
				<h2 style={{ display: "none" }}>My Life Timeline</h2>
				<Timeline EventList={EventList} />
			</main>
		</>
	);
};

export default Main;
