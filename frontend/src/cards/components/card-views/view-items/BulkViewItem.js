import React from "react";

function BulkViewItem(props) {
	return (
		<tr className="bulk-view-item">
			<td>
				<input type="checkbox" name="card-selected" />
			</td>
			<td className="bulk-view__card-name">
				<div className="bulk-view__image-container">
					<img
						src={props.image}
						alt={props.name}
						className="bulk-view__card-img"
					/>
				</div>
				<div className="bulk-view__card-info">
					<p>{props.name}</p>
					<p>{props.cardId}</p>
				</div>
			</td>
			<td className="bulk-view__card-details">{props.details}</td>
			<td>{props.level}</td>
			<td>{props.bcx}</td>
			<td>{props.cp}</td>
			<td>{props.owner}</td>
			<td>{props.currentUser}</td>
			<td>{props.listedPrice}</td>
		</tr>
	);
}

export default BulkViewItem;
