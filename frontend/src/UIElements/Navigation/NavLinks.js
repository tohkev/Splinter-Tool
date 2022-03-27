import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
	return (
		<React.Fragment>
			<ul className="nav-links nav-links__left">
				<li>
					<NavLink to="/mycards">My Cards</NavLink>
				</li>
				<li>More(Menu)</li>
			</ul>
			<ul className="nav-links nav-links__right">
				<li>Dark Mode Button</li>
				<li>Credits/Dec</li>
				<li>Username(Menu)</li>
			</ul>
		</React.Fragment>
	);
}

export default NavLinks;
