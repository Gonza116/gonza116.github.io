import { useState } from "react";
import { EventListEN } from "./constants/eventList";
import AboutMe from "./AboutMe";
import Timeline from "./Timeline";
import Swirl from "./Swirl";
import Navbar from "./Navbar";
import "./Main.css";

const Main = () => {
  const [EventList, setEventList] = useState(EventListEN);

  return (
    <>
      <header>
        <h1 style={{ display: "none" }}>Gonzalo García Granés</h1>
        <Navbar setEventList={setEventList} />
        <AboutMe />
        <Swirl />
      </header>

      <section className="timeline-section">
        <Timeline EventList={EventList} />
      </section>
    </>
  );
};

export default Main;
