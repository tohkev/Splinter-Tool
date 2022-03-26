import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import MainNav from "./UIElements/Navigation/MainNav";
import CardList from "./cards/components/CardList";
import UserCards from "./cards/pages/UserCards";
import "./App.css";

function App() {
	let routes = (
		<Routes>
			<Route path="/" element={<h1>Home Page</h1>} />
			<Route path="/mycards" element={<UserCards user="snud" />} />
			<Route path="/:username" element={<UserCards />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);

	return (
		<BrowserRouter>
			<MainNav />
			{routes}
		</BrowserRouter>
	);
}

export default App;
