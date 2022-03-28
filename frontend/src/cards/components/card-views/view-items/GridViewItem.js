import React from "react";

function GridViewItem(props) {
	return (
		<article className="grid-view-item section-block">
			<div className="grid-view-item__heading bottom-divider">
				<h3>{props.name}</h3>
				<p>{props.details}</p>
			</div>
			<div className="grid-view-item__main">
				<img
					src={props.image}
					alt={props.name}
					className="grid-view-item__img"
				/>
				<summary className="grid-view-item__card-info">
					<div className="grid-view-item__on-hand bottom-divider">
						<p className="grid-view-item__count">
							<span>{props.numOwned} </span>/
							<span> {props.numAvailable}</span>
						</p>
						<p className="grid-view-item__data">
							Owned / Available
						</p>
					</div>
					<div className="grid-view-item__market-info bottom-divider">
						<p className="grid-view-item__count">
							<span>{props.numForSale} </span>/
							<span> {props.numForRent}</span>
						</p>
						<p className="grid-view-item__data">
							For Sale / For Rent
						</p>
					</div>
					<div className="grid-view-item__price-info">
						<p className="grid-view-item__count">
							<span>${props.lowestCardPrice}</span> /
							<span> ${props.lowestBcxPrice}</span>
						</p>
						<p className="grid-view-item__data">
							Floor Price / per BCX
						</p>
					</div>
					<button className="grid-view-item__details-btn">
						View Details
					</button>
				</summary>
			</div>
		</article>
	);
}

export default GridViewItem;
