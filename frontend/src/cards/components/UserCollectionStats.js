import React from "react";

import "./UserCollectionStats.css";

function UserCollectionStats(props) {
	return (
		<section className="user-stats__block section-block">
			<div className="user-stats__info">
				<h2 className="user-stats__title">
					@{props.user}'s Collection Stats
				</h2>
				<p className="user-stats__statistics">
					Estimated total value: $<span className="bold">{999}</span>{" "}
					(based on lowest price) ||{" "}
					<span className="bold">{"50,000"}</span> CP (Collection
					Power)
				</p>
			</div>
			<div className="user-stats__settings">
				<div className="user-stats__view-mode">
					<p>View mode</p>
					<div className="user-stats__view-options">
						<input
							type="radio"
							value="bulkView"
							name="view-mode"
							id="bulk"
							onChange={props.viewBulk}
							checked={props.viewMode === "bulkView"}
						/>
						<label htmlFor="bulk">Bulk</label>
						<input
							type="radio"
							name="view-mode"
							id="grid"
							value="gridView"
							onChange={props.viewGrid}
							checked={props.viewMode === "gridView"}
						/>
						<label htmlFor="grid">Grid</label>
						<input
							type="radio"
							name="view-mode"
							id="list"
							value="listView"
							onChange={props.viewList}
							checked={props.viewMode === "listView"}
						/>
						<label htmlFor="list">List</label>
					</div>
				</div>
				<button className="refresh-btn">R</button>
			</div>
		</section>
	);
}

export default UserCollectionStats;
