import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import { useHttpClient } from "./hooks/http-hook";
import MainNav from "./UIElements/Navigation/MainNav";
import UserCards from "./cards/pages/UserCards";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	// const [cards, setCards] = React.useState([]);
	const [cardDatabase, setCardDatabase] = React.useState([]);
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	const example = {
		id: 423,
		name: "Supply Runner",
		color: "Gray",
		type: "Monster",
		sub_type: null,
		rarity: 1,
		drop_rate: 0,
		stats: {
			mana: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
			attack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			ranged: [2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
			magic: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			armor: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			health: [4, 5, 5, 6, 5, 6, 6, 5, 6, 5],
			speed: [3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
			abilities: [
				[],
				[],
				[],
				[],
				["Swiftness"],
				[],
				[],
				[],
				[],
				["Strengthen"],
			],
		},
		is_starter: false,
		editions: "7",
		created_block_num: null,
		last_update_tx: null,
		total_printed: 510124,
		is_promo: false,
		tier: 7,
		distribution: [
			{
				card_detail_id: 423,
				gold: false,
				edition: 7,
				num_cards: "130257",
				total_xp: "490069",
				num_burned: "296",
				total_burned_xp: "428",
			},
			{
				card_detail_id: 423,
				gold: true,
				edition: 7,
				num_cards: "10283",
				total_xp: "19625",
				num_burned: "2",
				total_burned_xp: "2",
			},
		],
	};

	// const cardMap = new Map();

	// for (let card of cards) {
	// 	let cardId = card.card_detail_id;
	// 	if (cardMap.has(cardId)) {
	// 		cardMap.set(cardId, {
	// 			...cardMap.get(cardId),
	// 			possess: [
	// 				...cardMap.get(cardId).possess,
	// 				{
	// 					uid: card.uid,
	// 					level: card.level,
	// 					gold: card.gold,
	// 					delegatedTo: card.delegated_to,
	// 					onSale: card.market_id,
	// 				},
	// 			],
	// 		});
	// 	} else {
	// 		cardMap.set(cardId, {
	// 			id: cardId,
	// 			cardName: cardDatabase.find((item) => item.id === cardId).name,
	// 			possess: [
	// 				{
	// 					uid: card.uid,
	// 					level: card.level,
	// 					gold: card.gold,
	// 					delegatedTo: card.delegated_to,
	// 					onSale: card.market_id,
	// 				},
	// 			],
	// 		});
	// 	}
	// }

	// console.log(cardMap);

	React.useEffect(() => {
		const fetchDatabase = async () => {
			try {
				const responseData = await sendRequest(
					`https://api.splinterlands.io/cards/get_details`
				);
				console.log(responseData);
				setCardDatabase(responseData);
			} catch (err) {
				console.log(err);
			}
		};
		fetchDatabase();
	}, []);

	// React.useEffect(() => {
	// 	fetch("https://api.splinterlands.io/cards/collection/snud")
	// 		.then((res) => res.json())
	// 		.then((data) => setCards(data.cards));
	// }, []);

	let routes = (
		<Routes>
			<Route path="/" element={<h1>Home Page</h1>} />
			<Route
				path="/mycards"
				element={<UserCards user="snud" cardDatabase={cardDatabase} />}
			/>
			<Route path="/search/:username" element={<UserCards />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);

	return (
		<BrowserRouter>
			<MainNav />
			{routes}
		</BrowserRouter>
	);
}

export default App;
