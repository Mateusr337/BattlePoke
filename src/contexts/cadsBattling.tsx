import { Children, createContext, useState } from "react";

const CardsContext = createContext(null);

export function CardsProvider({ children }: any) {
  const persistedCards: any = JSON.parse(localStorage.getItem("cards") as any);
  const [cards, setCards] = useState(persistedCards as any);

  const SetCards = (cards: Array<any>, level: number) => {
    setCards(cards);
    localStorage.setItem("cards", JSON.stringify({ cards, level }));
  };

  const deleteCards = () => {
    setCards({});
    localStorage.removeItem("cards");
  };

  return (
    <CardsContext.Provider value={{ cards, SetCards, deleteCards } as any}>
      {children}
    </CardsContext.Provider>
  );
}

export default CardsContext;
