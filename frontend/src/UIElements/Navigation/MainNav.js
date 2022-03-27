import React from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks.js";
import "./MainNav.css";

function MainNav() {
	return (
		<React.Fragment>
			<header className="main-header">
				<h1 className="main-navigation__logo">
					<Link to="/">SplinterTool</Link>
				</h1>
				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
				<button
					className="main-navigation__menu-btn"
					onClick={() => {}}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</header>
		</React.Fragment>
	);
}

export default MainNav;
