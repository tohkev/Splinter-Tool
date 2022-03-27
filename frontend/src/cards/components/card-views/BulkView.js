import React from "react";

import BulkViewItem from "./view-items/BulkViewItem";
import "./BulkView.css";

function BulkView(props) {
	const DUMMY_CARDS = [
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion", "common", "death"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: 0,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion", "common", "death"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: 0,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion", "common", "death"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: 0,
		},
	];

	const bulkItemList = DUMMY_CARDS.map((card) => {
		return (
			<BulkViewItem
				image={card.image}
				name={card.name}
				cardId={card.cardId}
				details={card.details}
				level={card.level}
				bcx={card.bcx}
				cp={card.cp}
				owner={card.owner}
				currentUser={card.currentUser}
				listedPrice={card.listedPrice}
			/>
		);
	});

	return (
		<table className="bulk-view">
			<thead>
				<tr>
					<th>Select</th>
					<th>Card Name</th>
					<th>Details</th>
					<th>Level</th>
					<th>BCX</th>
					<th>CP</th>
					<th>Owner</th>
					<th>Delegated/Rented To</th>
					<th>Listed Price</th>
				</tr>
			</thead>
			<tbody>{bulkItemList}</tbody>
		</table>
	);
}

export default BulkView;
