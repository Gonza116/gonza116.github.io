import { useState } from "react";
import { EventListEN } from "./constants/eventList";
import Title from "./Title";
import Timeline from "./Timeline";
import Footer from "./Footer";
import Header from "./Header";
import useWindowDimensions from "./helpers/hooks";

const Main = () => {
  const [EventList, setEventList] = useState(EventListEN);
  const { height } = useWindowDimensions();

  return (
    <>
      <div>
        <div style={{ float: "left", width: "50%" }}>
          <Header setEventList={setEventList} />
          <Title />
          <Footer />
        </div>

        <div
          style={{
            float: "left",
            width: "50%",
            overflow: "auto",
            height: height,
          }}
        >
          <Timeline EventList={EventList} />
        </div>

        <br />
        <br />
      </div>
    </>
  );
};

export default Main;
