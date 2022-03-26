import React from "react";

import CardList from "./cards/components/CardList";
import "./App.css";
import MainNav from "./UIElements/Navigation/MainNav";

function App() {
	return (
		<React.Fragment>
			<MainNav />
			<div className="App">
				<h1>App component</h1>
				<CardList />
			</div>
		</React.Fragment>
	);
}

export default App;
