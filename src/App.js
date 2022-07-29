import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkTest from "./LinkTest";
import Main from "./Main";

const App = () => {
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
