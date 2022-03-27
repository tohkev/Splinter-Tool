import React from "react";

import FilterInputs from "./FilterInputs";
import "./FilterMenu.css";

function FilterMenu() {
	const [textInput, setTextInput] = React.useState({
		"search-term": "",
		"min-cp": null,
		"max-cp": null,
	});

	const [edition, setEdition] = React.useState({
		Alpha: false,
		Beta: false,
		Promo: false,
		Reward: false,
		Untamed: false,
		Dice: false,
		"Chaos Legion": false,
		Gladius: false,
	});

	const [general, setGeneral] = React.useState({
		Regular: false,
		Gold: false,
		Summoners: false,
		Monsters: false,
	});

	const [splinter, setSplinter] = React.useState({
		Fire: false,
		Water: false,
		Earth: false,
		Life: false,
		Death: false,
		Dragon: false,
		Neutral: false,
	});

	const [others, setOthers] = React.useState({
		"On Market": true,
		"For Rent": true,
		Delegated: true,
		Owned: true,
		Cooldown: true,
		Locked: true,
	});

	const editionFilters = Object.keys(edition).map((set, index) => {
		return <FilterInputs key={index} criteria={set} />;
	});

	const generalFilters = Object.keys(general).map((set, index) => {
		return <FilterInputs key={index} criteria={set} />;
	});

	const splinterFilters = Object.keys(splinter).map((set, index) => {
		return <FilterInputs key={index} criteria={set} />;
	});

	const otherFilters = Object.keys(others).map((set, index) => {
		return <FilterInputs key={index} criteria={set} />;
	});

	return (
		<aside className="filter-menu section-block">
			<div className="filter-menu__section">
				<h3>Filter</h3>
			</div>
			<form>
				<div className="filter-menu__card filter-menu__section">
					<h4 className="filter-menu__heading">CARD INFO</h4>
					<div className="filter-menu__by-term filter-menu__text-field">
						<label htmlFor="search-term">Search</label>
						<input
							type="text"
							placeholder="Card / Ability Name"
							name="search-term"
							id="search-term"
						/>
					</div>

					<div className="filter-menu__by-cp">
						<div className="filter-menu__min-cp filter-menu__text-field">
							<label htmlFor="min-cp">U</label>
							<input
								type="number"
								placeholder="Min CP"
								name="min-cp"
								id="min-cp"
							/>
						</div>
						<div className="filter-menu__max-cp filter-menu__text-field">
							<label htmlFor="max-cp">D</label>
							<input
								type="number"
								placeholder="Max CP"
								name="max-cp"
								id="max-cp"
							/>
						</div>
					</div>
				</div>
				<div className="filter-menu__edition filter-menu__section">
					<h4 className="filter-menu__heading">PACK EDITION</h4>
					{editionFilters}
				</div>
				<div className="filter-menu__general filter-menu__section">
					<h4 className="filter-menu__heading">GENERAL</h4>
					{generalFilters}
				</div>
				<div className="filter-menu__splinter filter-menu__section">
					<h4 className="filter-menu__heading">SPLINTER</h4>
					{splinterFilters}
				</div>
				<div className="filter-menu__other filter-menu__section">
					<h4 className="filter-menu__heading">OTHER</h4>
					{otherFilters}
				</div>
			</form>
		</aside>
	);
}

export default FilterMenu;
