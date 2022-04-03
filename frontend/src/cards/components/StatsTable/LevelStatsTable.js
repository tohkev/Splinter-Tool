import React from "react";
import LevelStatsRow from "./LevelStatsRow";

import "./LevelStatsTable.css";

function LevelStatsTable(props) {
	return (
		<table className="level-stats-table">
			<thead>
				<tr>
					<th>Level</th>
					<th>Mana</th>
					<th>Attack</th>
					<th>Speed</th>
					<th>Armor</th>
					<th>Health</th>
					<th>Abilities</th>
				</tr>
			</thead>
			<tbody>
				<LevelStatsRow />
			</tbody>
		</table>
	);
}

export default LevelStatsTable;
