import React from "react";

import CardItem from "../components/CardItem";
import BulkView from "./card-views/BulkView";
import GridView from "./card-views/GridView";
import ListView from "./card-views/ListView";
import "./CardList.css";

function CardList(props) {
	if (props.viewMode === "bulkView") {
		return <BulkView />;
	} else if (props.viewMode === "gridView") {
		return <GridView />;
	} else if (props.viewMode === "listView") {
		return <ListView />;
	} else {
		return <h1>Error showing cards!</h1>;
	}
}

export default CardList;
