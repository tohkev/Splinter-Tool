import React from "react";
import { Col, Row } from "react-bootstrap";

import UserCollectionStats from "../components/UserCollectionStats";
import FilterMenu from "../components/FilterMenu";
import CardList from "../components/CardList";

import "./UserCards.css";

function UserCards(props) {
	return (
		<main className="user-cards">
			<div className="user-cards__library">
				<div className="filter-menu-block">
					<FilterMenu />
				</div>
				<div className="card-list-block">
					<CardList />
				</div>
			</div>
		</main>
	);
}

export default UserCards;
