import React from "react";

import "./GridView.css";
import GridViewItem from "./view-items/GridViewItem";

function GridView(props) {
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
			details: ["gold", "chaos legion", "common", "death"],
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

	const gridItemList = DUMMY_CARDS.map((card) => {
		return (
			<GridViewItem
				image={card.image}
				name={card.name}
				details={card.details}
				numOwned={card.numOwned}
				numAvailable={card.numAvailable}
				numForSale={card.numForSale}
				numForRent={card.numForRent}
				lowestCardPrice={card.lowestCardPrice}
				lowestBcxPrice={card.lowestBcxPrice}
			/>
		);
	});

	return <main className=" card-list grid-view">{gridItemList}</main>;
}

export default GridView;