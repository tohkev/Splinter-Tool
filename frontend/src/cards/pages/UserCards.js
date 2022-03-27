import React from "react";

import UserCollectionStats from "../components/UserCollectionStats";
import FilterMenu from "../components/FilterMenu";
import CardList from "../components/CardList";

import "./UserCards.css";

function UserCards(props) {
	return (
		<React.Fragment>
			<UserCollectionStats user={props.user} />
			<div className="user-cards__library">
				<FilterMenu />
				<CardList />
			</div>
		</React.Fragment>
	);
}

export default UserCards;
