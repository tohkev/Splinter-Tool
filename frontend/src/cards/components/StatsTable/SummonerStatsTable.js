import React from "react";

import LevelStatsRow from "./LevelStatsRow";

function SummonerStatsTable(props) {
	const summonerStats = {
		1: {
			bcx: [1, 3, 5, 12, 25, 52, 105, 172, 305, 505],
			goldBcx: [0, 0, 0, 1, 2, 4, 8, 13, 23, 38],
			common: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			rare: [1, 2, 2, 3, 4, 5, 6, 6, 7, 8],
			epic: [1, 1, 2, 2, 3, 4, 4, 5, 5, 6],
			legendary: [0, 1, 1, 2, 2, 2, 3, 3, 4, 4],
		},
		2: {
			bcx: [1, 5, 14, 25, 40, 60, 85, 115],
			goldBcx: [0, 1, 2, 4, 7, 11, 16, 22],
			common: [1, 3, 4, 5, 6, 8, 9, 10],
			rare: [1, 2, 3, 4, 5, 6, 7, 8],
			epic: [1, 2, 2, 3, 4, 5, 5, 6],
			legendary: [1, 1, 2, 2, 3, 3, 4, 4],
		},
		3: {
			bcx: [1, 4, 10, 20, 32, 46],
			goldBcx: [0, 1, 2, 4, 7, 10],
			common: [2, 3, 5, 7, 8, 10],
			rare: [1, 3, 4, 5, 7, 8],
			epic: [1, 2, 3, 4, 5, 6],
			legendary: [1, 1, 2, 3, 3, 4],
		},
		4: {
			bcx: [1, 3, 6, 11],
			goldBcx: [0, 1, 2, 4],
			common: [3, 5, 8, 10],
			rare: [2, 4, 6, 8],
			epic: [2, 3, 5, 6],
			legendary: [1, 2, 3, 4],
		},
	};

	const cardLevelRows = [];
	for (let i = 0; i < summonerStats[props.rarity].bcx.length; i++) {
		cardLevelRows.push(
			<LevelStatsRow
				monster={props.monster}
				level={i + 1}
				mana={props.mana}
				common={summonerStats[props.rarity].common[0]}
				rare={summonerStats[props.rarity].rare[0]}
				epic={summonerStats[props.rarity].epic[0]}
				legendary={summonerStats[props.rarity].legendary[0]}
				abilities={props.abilities}
			/>
		);
	}

	return (
		<React.Fragment>
			<thead>
				<tr className="level-stats-table__header">
					<th>Level</th>
					<th>Mana</th>
					<th>Common</th>
					<th>Rare</th>
					<th>Epic</th>
					<th>Legendary</th>
					<th>Abilities</th>
				</tr>
			</thead>
			<tbody>{cardLevelRows}</tbody>
		</React.Fragment>
	);
}

export default SummonerStatsTable;
