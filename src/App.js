import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "./Title";
import LinkTest from "./LinkTest";
import Timeline from "./Timeline";
import Header from "./Header";
import { keepTheme } from "./utils/themes";
import { EventListEN } from "./constants/eventList";
import Footer from "./Footer";

const App = () => {
  useEffect(() => {
    keepTheme();
  });

  const [EventList, setEventList] = useState(EventListEN);

  return (
    <Router>
      <Header setEventList={setEventList} />
      <Switch>
        <Route path="/link-test">
          <LinkTest />
        </Route>
        <Route path="/">
          <Title />
          <Timeline EventList={EventList} />
          <br />
          <br />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
