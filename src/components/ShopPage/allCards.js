import React, { useEffect, useState } from "react";
import { getAllPlants } from "../../api";
import ProductCard from "./productCard";

const AllCards = () => {
  const [cards, setCards] = useState([]);

  const cardsFetch = async () => {
    try {
      const cardList = await getAllPlants();
      return cardList;
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
export default AllCards;
