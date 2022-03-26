import React from "react";

import "./UserCollectionStats.css";

function UserCollectionStats(props) {
	return (
		<section className="user-stats__block">
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
							value="bulk"
							name="view-mode"
							id="bulk"
						/>
						<label for="bulk">Bulk</label>
						<input
							type="radio"
							name="view-mode"
							id="grid"
							value="grid"
						/>
						<label for="grid">Grid</label>
						<input
							type="radio"
							name="view-mode"
							id="list"
							value="list"
						/>
						<label for="list">List</label>
					</div>
				</div>
				<button className="refresh-btn">R</button>
			</div>
		</section>
	);
}

export default UserCollectionStats;
