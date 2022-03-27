import React from "react";

function FilterInputs(props) {
	return (
		<div className="filter-inputs__criteria">
			<div className="filter-inputs__selection">
				<input
					type="checkbox"
					name={props.criteria}
					id={props.criteria}
				/>
				<label htmlFor={props.criteria}>{props.criteria}</label>
			</div>
			<p className="filter-inputs__count">0/0</p>
		</div>
	);
}

export default FilterInputs;
