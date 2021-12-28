import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import LinkTest from "./LinkTest";
import { keepTheme } from "./utils/themes";
import Main from "./Main";

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
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
