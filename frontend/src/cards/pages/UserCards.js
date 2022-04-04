import React from "react";
import { Col, Row } from "react-bootstrap";

import UserCollectionStats from "../components/UserCollectionStats";
import FilterMenu from "../components/FilterMenu";
import CardList from "../components/CardList";

import "./UserCards.css";

function UserCards(props) {
	const [viewMode, setViewMode] = React.useState("bulkView");

	function viewBulk() {
		setViewMode("bulkView");
	}

	function viewGrid() {
		setViewMode("gridView");
	}

	function viewList() {
		setViewMode("listView");
	}

	return (
		<React.Fragment>
			<UserCollectionStats
				viewBulk={viewBulk}
				viewGrid={viewGrid}
				viewList={viewList}
				viewMode={viewMode}
			/>
			<main className="user-cards">
				<div className="user-cards__library">
					<div className="filter-menu-block">
						<FilterMenu />
					</div>
					<div className="card-list-block">
						<main className="card-list">
							<CardList viewMode={viewMode} />
						</main>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}

export default UserCards;
