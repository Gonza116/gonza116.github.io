import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import LinkTest from "./LinkTest";
import Timeline from "./Timeline";
import { keepTheme } from "./utils/themes";

const App = () => {
  useEffect(() => {
    keepTheme();
  });

  return (
    <Router>
      <Switch>
        <Route path="/link-test">
          <LinkTest />
        </Route>
        <Route path="/">
          <Header />
          <Timeline />
          <br />
          <br />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
