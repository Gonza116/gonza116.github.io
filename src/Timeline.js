import { useState } from "react";
import "./Timeline.css";
import EventList from "./constants/eventList";
import links from "./constants/links";

const getFilteredEvents = (filter) => {
  switch (filter) {
    case "ALL":
      return EventList;
    case "STUDIES":
      return EventList.filter((listedEvent) => listedEvent.type === "STUDIES");
    case "WORK":
      return EventList.filter((listedEvent) => listedEvent.type === "WORK");
    case "STUDIES+WORK":
      return EventList.filter(
        (listedEvent) =>
          listedEvent.type === "STUDIES" || listedEvent.type === "WORK"
      );
    default:
      break;
  }
  return EventList;
};

const Timeline = () => {
  const [events, setEvents] = useState(getFilteredEvents("ALL"));
  const [filter, setFilter] = useState("ALL");

  return (
    <div>
      <br />
      <div className="buttons">
        <button
          onClick={() => {
            setEvents(getFilteredEvents("ALL"));
            setFilter("ALL");
          }}
        >
          Todos los eventos
        </button>
        <button
          onClick={() => {
            setEvents(getFilteredEvents("WORK"));
            setFilter("WORK");
          }}
        >
          Solo trabajo
        </button>
        <button
          onClick={() => {
            setEvents(getFilteredEvents("STUDIES+WORK"));
            setFilter("STUDIES+WORK");
          }}
        >
          Estudio y trabajo
        </button>
        <button
          onClick={() => {
            setEvents(getFilteredEvents("STUDIES"));
            setFilter("STUDIES");
          }}
        >
          Solo estudio
        </button>
      </div>
      {filter !== "ALL" && (
        <p className="cv-shove">
          Si quieres, también puedes descargarte mi currículum{" "}
          <a href={links.CV} target="_blank" rel="noreferrer">
            aquí
          </a>
          .
        </p>
      )}
      {events.map((listedEvent, index) => {
        return (
          <Event
            {...listedEvent}
            key={index}
            isFinal={index === events.length - 1}
          />
        );
      })}
    </div>
  );
};

export default Timeline;

const Event = ({ explanation, date, title, extra }, isFinal) => {
  if (!isFinal && (!explanation || explanation === "")) {
    explanation = (
      <div>
        <br />
        <br />
      </div>
    );
  }
  return (
    <div className="container">
      <p className="subtitle">{date}: </p>
      <b>{title}</b>
      {extra && (
        <p className="subtitle">
          <i> {extra}</i>
        </p>
      )}
      <div className="data">{explanation}</div>
    </div>
  );
};
