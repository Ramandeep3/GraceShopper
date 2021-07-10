import React, { useEffect, useState } from "react";
import { getAllPlants } from "../../api";
import ProductCard from "../ShopPage/productCard";
import "./topCards.css";

const TopCards = () => {
  const [cards, setCards] = useState([]);

  const cardsFetch = async () => {
    try {
      const cardList = await getAllPlants();
      const shuffled = cardList.sort(() => 0.5 - Math.random());
      const topPicks = shuffled.slice(0, 6);
      return topPicks;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    (async () => {
      const receivedCards = await cardsFetch();
      setCards(receivedCards);
    })();
  }, []);
  return cards.map((card) => {
    return <ProductCard key={card.id} {...card} />;
  });
};
export default TopCards;
