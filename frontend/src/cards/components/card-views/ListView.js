import React from "react";

import ListViewItem from "./view-items/ListViewItem";
import "./ListView.css";

function ListView() {
	const DUMMY_CARDS = [
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/chaos/Carrion%20Shade_lv3_gold.png",
			uid: "G7-353-KUOG0BFNJ4",
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
			totalCirculation: 10000,
			totalCards: 9000,
			onTheMarket: 5000,
		},
		{
			image: "https://d36mxiodymuqjm.cloudfront.net/cards_by_level/dice/Mylor%20Crowling_lv1.png",
			uid: "C5-259-HCNL5NZT40",
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
			totalCirculation: 5000,
			totalCards: 3000,
			onTheMarket: 100,
		},
	];

	const listViewItems = DUMMY_CARDS.map((card) => {
		return (
			<ListViewItem
				image={card.image}
				name={card.name}
				details={card.details}
				numOwned={card.numOwned}
				numAvailable={card.numAvailable}
				numForSale={card.numForSale}
				numForRent={card.numForRent}
				lowestCardPrice={card.lowestCardPrice}
				lowestBcxPrice={card.lowestBcxPrice}
				totalCirculation={card.totalCirculation}
				totalCards={card.totalBcx}
				onTheMarket={card.onTheMarket}
				uid={card.uid}
			/>
		);
	});

	return <div className="list-view">{listViewItems}</div>;
}

export default ListView;
