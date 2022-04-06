import React from "react";

import BulkView from "./card-views/BulkView";
import GridView from "./card-views/GridView";
import ListView from "./card-views/ListView";
import "./CardList.css";

function CardList(props) {
	if (props.viewMode === "bulkView") {
		return (
			<BulkView
				userCards={props.userCards}
				cardDatabase={props.cardDatabase}
			/>
		);
	} else if (props.viewMode === "gridView") {
		return <GridView />;
	} else if (props.viewMode === "listView") {
		return <ListView />;
	} else {
		return <h3>Error showing cards!</h3>;
	}
}

export default CardList;
