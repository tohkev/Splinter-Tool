import React from "react";

function MonsterStatsTable(props) {
	return (
		<React.Fragment>
			<thead>
				<tr className="level-stats-table__header">
					<th>Level</th>
					<th>Mana</th>
					<th>Attack</th>
					<th>Speed</th>
					<th>Armor</th>
					<th>Health</th>
					<th>Abilities</th>
				</tr>
			</thead>
			<tbody>{props.cardLevelRows}</tbody>
		</React.Fragment>
	);
}

export default MonsterStatsTable;
