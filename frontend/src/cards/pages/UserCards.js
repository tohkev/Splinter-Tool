import React from "react";
import UserCollectionStats from "../components/UserCollectionStats";

import "./UserCards.css";

function UserCards(props) {
	return (
		<React.Fragment>
			<UserCollectionStats user={props.user} />
		</React.Fragment>
	);
}

export default UserCards;
