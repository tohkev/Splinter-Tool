import React from "react";

function LevelStatsRow(props) {
	return props.monster ? (
		<tr>
			<td>{props.level}</td>
			<td>{props.mana}</td>
			<td>{props.attack}</td>
			<td>{props.speed}</td>
			<td>{props.armor}</td>
			<td>{props.health}</td>
			<td>{props.abilities}</td>
		</tr>
	) : (
		<tr>
			<td>{props.level}</td>
			<td>{props.mana}</td>
			<td>{props.common}</td>
			<td>{props.rare}</td>
			<td>{props.epic}</td>
			<td>{props.legendary}</td>
			{props.level === 1 ? <td>{props.abilities}</td> : <td></td>}
		</tr>
	);
}

export default LevelStatsRow;
