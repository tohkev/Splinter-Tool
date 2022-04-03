import React from "react";

import LevelStatsTable from "../../StatsTable/LevelStatsTable";

function ListViewItem(props) {
	return (
		<div className="list-view-item list-view-container section-block">
			<div className="list-view-item__image-container">
				<img
					className="list-view-item__card-image"
					src={props.image}
					alt="card name"
				/>
			</div>
			<div className="list-view-item__card-info-container list-view-container">
				<div className="list-view-item__card-info-block">
					<h4>Card Name</h4>
					<p>Card Icons</p>
				</div>
				<ul>
					<li>Total Circulation:</li>
					<li>Total Cards:</li>
					<li>On the Market:</li>
				</ul>
			</div>
			<div className="list-view-item__card-level-stats list-view-container">
				<LevelStatsTable />
			</div>
			<div className="list-view-item__market-stats-container list-view-container">
				<div className="view-item__category bottom-divider">
					<p className="view-item__count">
						<span>{props.numOwned} </span>/
						<span> {props.numAvailable}</span>
					</p>
					<p className="view-item__data">Owned / Available</p>
				</div>
				<div className="view-item__category bottom-divider">
					<p className="view-item__count">
						<span>{props.numForSale} </span>/
						<span> {props.numForRent}</span>
					</p>
					<p className="view-item__data">For Sale / For Rent</p>
				</div>
				<div className="view-item__category">
					<p className="view-item__count">
						<span>${props.lowestCardPrice}</span> /
						<span> ${props.lowestBcxPrice}</span>
					</p>
					<p className="view-item__data">Floor / per BCX</p>
				</div>
				<button className="view-item__details-btn">View Details</button>
			</div>
		</div>
	);
}

export default ListViewItem;
