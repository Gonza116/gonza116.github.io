import { useState, useEffect } from "react";
import "./Timeline.css";
import links from "./constants/links";
import { useTranslation } from "react-i18next";

const getFilteredEvents = (EventList, filter) => {
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

const Timeline = ({ EventList }) => {
  const { t } = useTranslation();
  const [events, setEvents] = useState(getFilteredEvents(EventList, "ALL"));
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    setEvents(getFilteredEvents(EventList, filter));
  }, [filter, EventList]);

  return (
    <div>
      <br />
      <div className="timeline-buttons-container">
        <button
          className={
            filter === "ALL"
              ? "timeline-filter-button-selected"
              : "timeline-filter-button"
          }
          onClick={() => {
            setFilter("ALL");
            setEvents(getFilteredEvents(EventList, "ALL"));
          }}
        >
          {t("allEvents")}
        </button>
        <button
          className={
            filter === "STUDIES+WORK"
              ? "timeline-filter-button-selected"
              : "timeline-filter-button"
          }
          onClick={() => {
            setFilter("STUDIES+WORK");
            setEvents(getFilteredEvents(EventList, "STUDIES+WORK"));
          }}
        >
          {t("workAndStudiesEvents")}
        </button>
        <button
          className={
            filter === "WORK"
              ? "timeline-filter-button-selected"
              : "timeline-filter-button"
          }
          onClick={() => {
            setFilter("WORK");
            setEvents(getFilteredEvents(EventList, "WORK"));
          }}
        >
          {t("workEvents")}
        </button>
        <button
          className={
            filter === "STUDIES"
              ? "timeline-filter-button-selected"
              : "timeline-filter-button"
          }
          onClick={() => {
            setFilter("STUDIES");
            setEvents(getFilteredEvents(EventList, "STUDIES"));
          }}
        >
          {t("studiesEvents")}
        </button>
      </div>
      {filter !== "ALL" && (
        <p className="cv-shove">
          {t("cv-timeline")}
          <a href={links.CV} target="_blank" rel="noreferrer">
            {t("here")}
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

const Event = ({ explanation, date, title, extra, technologies, isFinal }) => {
  const { t } = useTranslation();
  if (!isFinal && (!explanation || explanation === "")) {
    explanation = (
      <div>
        <br />
        <br />
      </div>
    );
  }
  return (
    <div className="timeline-container">
      <div className="timeline-top-container">
        <p className="timeline-date">{date}: </p>
        <div className="timeline-subcontainer">
          <b>{title}</b>
          {extra && (
            <p className="timeline-extra">
              <i> {extra}</i>
            </p>
          )}
        </div>
      </div>
      <div className="timeline-data">
        {technologies && (
          <p className="timeline-extra">
            <b>{t("technologies")}: </b> {technologies}
          </p>
        )}
        {explanation}
      </div>
    </div>
  );
};
