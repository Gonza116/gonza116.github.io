import { HashRouter, Route } from "react-router-dom";
import Main from "./Main";
import MusicTops from "./tops/MusicTops";
import Oscars from "./tops/Oscars";

const App = () => {
	return (
		<HashRouter>
			<Route exact path="/" component={Main} />
			<Route exact path="/tops/music" component={MusicTops} />
			<Route exact path="/tops/oscars" component={Oscars} />
		</HashRouter>
	);
};

export default App;
