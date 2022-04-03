import React from "react";
import axios from "axios";

import LevelStatsRow from "./LevelStatsRow";

import "./LevelStatsTable.css";
import MonsterStatsTable from "./MonsterStatsTable";
import SummonerStatsTable from "./SummonerStatsTable";

function LevelStatsTable(props) {
	const DUMMY_CARD_DETAILS = [
		{
			player: "snud",
			uid: "G7-353-KUOG0BFNJ4",
			card_detail_id: 353,
			xp: 1,
			gold: true,
			edition: 7,
			market_id: null,
			buy_price: null,
			market_listing_type: null,
			market_listing_status: null,
			market_created_date: null,
			last_used_block: 63195857,
			last_used_player: "mugger",
			last_used_date: "2022-04-03T18:02:17.175Z",
			last_transferred_block: null,
			last_transferred_date: null,
			alpha_xp: null,
			delegated_to: "mugger",
			delegation_tx: "05073da8fb0333c7ef7e8f915afb1fd71f1426e8",
			skin: null,
			delegated_to_display_name: "mugger",
			display_name: null,
			lock_days: null,
			unlock_date: null,
			details: {
				id: 353,
				name: "Carrion Shade",
				color: "Black",
				type: "Monster",
				sub_type: null,
				rarity: 1,
				drop_rate: 0,
				stats: {
					mana: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					attack: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
					ranged: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					magic: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					armor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					health: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
					speed: [2, 2, 2, 2, 3, 3, 3, 3, 4, 4],
					abilities: [[], [], ["Flying"], [], [], [], [], [], [], []],
				},
				is_starter: false,
				editions: "7",
				created_block_num: null,
				last_update_tx: null,
				total_printed: 507827,
				is_promo: false,
				tier: 7,
				distribution: [
					{
						card_detail_id: 353,
						gold: false,
						edition: 7,
						num_cards: "157098",
						total_xp: "487171",
						num_burned: "582",
						total_burned_xp: "1070",
					},
					{
						card_detail_id: 353,
						gold: true,
						edition: 7,
						num_cards: "12553",
						total_xp: "19582",
						num_burned: "4",
						total_burned_xp: "4",
					},
				],
			},
		},
	];

	const DUMMY_CARD_DETAILS2 = [
		{
			player: "snud",
			uid: "C5-259-HCNL5NZT40",
			card_detail_id: 259,
			xp: 1,
			gold: false,
			edition: 5,
			market_id: null,
			buy_price: null,
			market_listing_type: null,
			market_listing_status: null,
			market_created_date: null,
			last_used_block: 63149219,
			last_used_player: "mugger",
			last_used_date: "2022-04-02T03:03:55.883Z",
			last_transferred_block: null,
			last_transferred_date: null,
			alpha_xp: null,
			delegated_to: "mugger",
			delegation_tx: "724ebcdb5f1f82516079335508742e2f1eb00afb",
			skin: null,
			delegated_to_display_name: "mugger",
			display_name: null,
			lock_days: null,
			unlock_date: null,
			details: {
				id: 259,
				name: "Mylor Crowling",
				color: "Green",
				type: "Summoner",
				sub_type: null,
				rarity: 2,
				drop_rate: 0,
				stats: {
					mana: 3,
					attack: 0,
					ranged: 0,
					magic: 0,
					armor: 0,
					health: 0,
					speed: 0,
					abilities: ["Thorns"],
				},
				is_starter: false,
				editions: "5",
				created_block_num: 46386733,
				last_update_tx: "dc48bb8f96929079c62ed2e121913f623076cf7f",
				total_printed: 63335,
				is_promo: false,
				tier: 4,
				distribution: [
					{
						card_detail_id: 259,
						gold: false,
						edition: 5,
						num_cards: "16091",
						total_xp: "60968",
						num_burned: "62",
						total_burned_xp: "81",
					},
					{
						card_detail_id: 259,
						gold: true,
						edition: 5,
						num_cards: "913",
						total_xp: "2280",
						num_burned: "5",
						total_burned_xp: "6",
					},
				],
			},
		},
	];

	const [cardInfo, setCardInfo] = React.useState(null);
	const [cardType, setCardType] = React.useState(null);
	const cardLevelRows = [];
	if (cardInfo) {
		if (cardType === "Monster") {
			for (let i = 0; i < cardInfo.stats.mana.length; i++) {
				cardLevelRows.push(
					<LevelStatsRow
						monster={true}
						level={i + 1}
						mana={cardInfo.stats.mana[i]}
						attack={cardInfo.stats.attack[i]}
						ranged={cardInfo.stats.ranged[i]}
						magic={cardInfo.stats.magic[i]}
						armor={cardInfo.stats.armor[i]}
						health={cardInfo.stats.health[i]}
						speed={cardInfo.stats.speed[i]}
						abilities={cardInfo.stats.abilities[i]}
					/>
				);
			}
		}
	}

	React.useEffect(() => {
		axios
			.get(
				`https://game-api.splinterlands.com/cards/find?ids=${props.uid}`
			)
			.then((res) => {
				setCardInfo(res.data[0].details);
				setCardType(res.data[0].details.type);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<table className="level-stats-table">
			{cardType === "Monster" && (
				<MonsterStatsTable cardLevelRows={cardLevelRows} />
			)}
			{cardType === "Summoner" && (
				<SummonerStatsTable
					rarity={cardInfo.rarity}
					mana={cardInfo.stats.mana}
					abilities={cardInfo.stats.abilities}
					monster={false}
				/>
			)}
		</table>
	);
}

export default LevelStatsTable;
