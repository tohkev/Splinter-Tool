import React from "react";

import BulkViewItem from "./view-items/BulkViewItem";
import packMap from "../../../util/packMap";
import rarityMap from "../../../util/rarityMap";
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
	];
	const bulkItemList = props.userCards.slice(0, 100).map((card) => {
		const cardInfo = props.cardDatabase.find(
			(data) => data.id === card.card_detail_id
		);
		const cardDetails = [
			card.gold ? "goldfoil" : "",
			packMap[card.edition],
			cardInfo.color,
			rarityMap[cardInfo.rarity],
		];
		return (
			<BulkViewItem
				key={card.uid}
				image={`https://d36mxiodymuqjm.cloudfront.net/cards_by_level/${
					packMap[card.edition]
				}/${encodeURIComponent(cardInfo.name)}_lv${card.level}${
					card.gold ? "_gold" : ""
				}.png`}
				name={cardInfo.name}
				cardId={card.uid}
				card_detail_id={card.card_detail_id}
				details={cardDetails}
				level={card.level}
				bcx={card.xp}
				cp={card.cp}
				owner={card.player}
				currentUser={card.delegated_to}
				listedPrice={card.market_listing_type}
			/>
		);
	});

	return (
		<table className="bulk-view section-block">
			<thead className="bottom-divider">
				<tr>
					<th className="py-3 min-w-3">Select</th>
					<th className="w-25 min-w-15">Card Name</th>
					<th className="w-15 min-w-10">Details</th>
					<th className="min-w-3">Level</th>
					<th className="min-w-3">BCX</th>
					<th className="min-w-3">CP</th>
					<th className="w-10 min-w-5">Owner</th>
					<th className="w-10 min-w-5">Playable by:</th>
					<th className="min-w-7">Listed Price</th>
				</tr>
			</thead>
			<tbody>{bulkItemList}</tbody>
		</table>
	);
}

export default BulkView;
