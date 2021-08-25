import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import LinkTest from "./LinkTest";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/link-test">
          <LinkTest />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
