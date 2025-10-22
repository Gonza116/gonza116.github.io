import { HashRouter, Route } from "react-router-dom";
import Main from "./Main";
import MusicTops from "./tops/MusicTops";

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Main} />
      <Route exact path="/tops/music" component={MusicTops} />
    </HashRouter>
  );
};

export default App;
