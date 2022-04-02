import React from "react";
import { Col, Card, Row } from "react-bootstrap";

function GridViewItem(props) {
	return (
		<div className="grid-view-item section-block">
			<div className="grid-view-item__heading bottom-divider">
				<h3>{props.name}</h3>
				<p>{props.details}</p>
			</div>
			<div className="grid-view-item__main">
				<div className="grid-view-item__image_container">
					<img
						src={props.image}
						alt={props.name}
						className="grid-view-item__img"
					/>
				</div>
				<div className="grid-view-item__card-info">
					<div className="grid-view-item_card-info_container">
						<div className="grid-view-item__category bottom-divider">
							<p className="view-item__count">
								<span>{props.numOwned} </span>/
								<span> {props.numAvailable}</span>
							</p>
							<p className="view-item__data">Owned / Available</p>
						</div>
						<div className="view-item__category bottom-divider">
							<p className="view-item__count">
								<span>{props.numForSale} </span>/
								<span> {props.numForRent}</span>
							</p>
							<p className="view-item__data">
								For Sale / For Rent
							</p>
						</div>
						<div className="view-item__category">
							<p className="view-item__count">
								<span>${props.lowestCardPrice}</span> /
								<span> ${props.lowestBcxPrice}</span>
							</p>
							<p className="view-item__data">Floor / per BCX</p>
						</div>
						<button className="view-item__details-btn">
							View Details
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GridViewItem;
