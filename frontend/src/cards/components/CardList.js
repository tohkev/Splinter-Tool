import React from "react";

import CardItem from "../components/CardItem";
import "./CardList.css";

function CardList() {
  const [cards, setCards] = React.useState([]);
  const [cardDatabase, setCardDatabase] = React.useState([]);

  const cardMap = new Map();

  for (let card of cards) {
    let cardId = card.card_detail_id;
    if (cardMap.has(cardId)) {
      cardMap.set(cardId, {
        ...cardMap.get(cardId),
        possess: [
          ...cardMap.get(cardId).possess,
          {
            uid: card.uid,
            level: card.level,
            gold: card.gold,
            delegatedTo: card.delegated_to,
            onSale: card.market_id,
          },
        ],
      });
    } else {
      cardMap.set(cardId, {
        id: cardId,
        cardName: cardDatabase.find((item) => item.id === cardId).name,
        possess: [
          {
            uid: card.uid,
            level: card.level,
            gold: card.gold,
            delegatedTo: card.delegated_to,
            onSale: card.market_id,
          },
        ],
      });
    }
  }

  console.log(cardMap);

  React.useEffect(() => {
    fetch("https://api.splinterlands.io/cards/get_details")
      .then((res) => res.json())
      .then((data) => setCardDatabase(data));
  }, []);

  React.useEffect(() => {
    fetch("https://api.splinterlands.io/cards/collection/snud")
      .then((res) => res.json())
      .then((data) => setCards(data.cards));
  }, []);

  return (
    <main>
      <h2>CardList Component</h2>
      <ul>
        <CardItem />
      </ul>
    </main>
  );
}

export default CardList;
