import { useState, useEffect } from "react";
import "./Timeline.css";
import { useTranslation } from "react-i18next";

const getFilteredEvents = (EventList, filter) => {
  switch (filter) {
    case "CURRENT":
      return EventList.filter((listedEvent) => listedEvent.type === "CURRENT");
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
  const [events, setEvents] = useState(getFilteredEvents(EventList, "ALL"));
  const [filter, setFilter] = useState("CURRENT");

  useEffect(() => {
    setEvents(getFilteredEvents(EventList, filter));
  }, [filter, EventList]);

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
    </>
  );
};

export default Timeline;

const Event = ({
  explanation,
  date,
  title,
  extra,
  technologies,
  isFinal,
  type,
}) => {
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
    <article className="timeline-item-current">
      <div className="timeline-item-title">
        <p className="timeline-text">{date}</p>
        <p className="timeline-current-badge">{t("currentOccupation")}</p>
      </div>
      <div className="timeline-body">
        <p className="timeline-text">
          <b>{title}</b>
        </p>
        <p className="timeline-text">{explanation}</p>
        {technologies && (
          <p className="timeline-technologies">{technologies}</p>
        )}
      </div>
    </article>
  );
};
