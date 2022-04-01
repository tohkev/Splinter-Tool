import React from "react";

import BulkViewItem from "./view-items/BulkViewItem";
import "./BulkView.css";

function BulkView(props) {
	const DUMMY_CARDS = [
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			name: "Carrion Shade",
			cardId: "G7-353-KUOG0BFNJ4",
			details: ["gold", "chaos legion"],
			level: 3,
			bcx: 1,
			cp: 125,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numForSale: 160,
			numForRent: 160,
			lowestCardPrice: 0.95,
			lowestBcxPrice: 0.95,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			name: "Mylor Crowling",
			cardId: "C5-259-HCNL5NZT40",
			details: ["summoner", "dice", "rare", "earth"],
			level: 1,
			bcx: 1,
			cp: 40,
			owner: "@snud",
			currentUser: "@mugger",
			listedPrice: null,
			numOwned: 1,
			numAvailable: 1,
			numPlayable: 1,
			numForSale: 80,
			numForRent: 80,
			lowestCardPrice: 26.4,
			lowestBcxPrice: 20.142,
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
		<main className="card-list section-block">
			<table className="bulk-view">
				<thead className="bottom-divider">
					<tr>
						<th className="py-3">Select</th>
						<th className="w-25">Card Name</th>
						<th className="w-15">Details</th>
						<th>Level</th>
						<th>BCX</th>
						<th className="w-5">CP</th>
						<th className="w-10">Owner</th>
						<th className="w-10">Playable by:</th>
						<th>Listed Price</th>
					</tr>
				</thead>
				<tbody>{bulkItemList}</tbody>
			</table>
		</main>
	);
}

export default BulkView;
