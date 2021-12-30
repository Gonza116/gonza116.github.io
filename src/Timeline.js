import { useState, useEffect } from "react";
import "./Timeline.css";
import { useTranslation } from "react-i18next";

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
          <div
            className="timeline-more-button"
            onClick={() => {
              setStage("STAGE_2");
            }}
          >
            <p>{t("stage-1-more")}</p>
          </div>
        );
      case "STAGE_2":
        return (
          <div
            className="timeline-more-button"
            onClick={() => {
              setStage("STAGE_3");
            }}
          >
            <p>{t("stage-2-more")}</p>
          </div>
        );
      case "STAGE_3":
        return (
          <div
            className="timeline-more-button"
            onClick={() => {
              setStage("STAGE_4");
            }}
          >
            <p>{t("stage-3-more")}</p>
          </div>
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
    <article
      className={
        type === "CURRENT"
          ? "timeline-item timeline-item-current"
          : "timeline-item"
      }
    >
      <div className="timeline-item-header">
        <time>{date}</time>
        {type === "CURRENT" && (
          <div className="timeline-item-current-badge">
            {t("currentOccupation")}
          </div>
        )}
      </div>
      <div
        className={
          type === "CURRENT"
            ? "timeline-item-body timeline-item-body-current"
            : "timeline-item-body"
        }
      >
        <h3>{title}</h3>
        <p>{explanation}</p>
        <h4 style={{ display: "none" }}>Technologies</h4>
        {getTechnologyBadges()}
      </div>
    </article>
  );
};
