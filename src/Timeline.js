import "./Timeline.css";
import EventList from "./eventList";

const Timeline = () => {
  return (
    <div>
      <br />
      {EventList.map((listedEvent, index) => {
        return <Event {...listedEvent} key={index} />;
      })}
    </div>
  );
};

export default Timeline;

const Event = ({ date, title, explanation, isFinal }) => {
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
      <p className="date">{date}: </p>
      <b>{title}</b>
      <div className="data">{explanation}</div>
    </div>
  );
};
