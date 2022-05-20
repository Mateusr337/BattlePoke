import { SetStateAction, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Button from "../Button";
import Card from "../card";
import Cards from "../cards";
import TitleTopic from "../titleTopic";
import { Container, Footer } from "./style";

interface Props {
  level: string;
  setToReceiveScreen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ToReceiveNewCard({ level, setToReceiveScreen }: Props) {
  const context = useAuth();

  const [cards, setCards] = useState([] as Array<any>);
  const [selectedCards, setSelectedCards] = useState([] as Array<any>);

  useEffect(() => {
    api.findCards(context.token).then((response) => {
      setCards(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCards.length > 3 && level === "0")
      setSelectedCards(selectedCards.slice(-3));

    if (selectedCards.length > 2 && level === "1")
      setSelectedCards(selectedCards.slice(-2));

    if (selectedCards.length > 2 && level === "2")
      setSelectedCards(selectedCards.slice(-2));

    if (selectedCards.length > 1 && level >= "3")
      setSelectedCards(selectedCards.slice(-1));
  }, [selectedCards]);

  async function getCards() {
    if (selectedCards.length < 3 && level === "0") return;
    if (selectedCards.length < 2 && level === "1") return;
    if (selectedCards.length < 2 && level === "2") return;
    if (selectedCards.length < 1 && level >= "3") return;

    api.createPokemonUser(context.token, selectedCards).then((response) => {
      setToReceiveScreen(false);
    });
  }

  return (
    <Container>
      <TitleTopic>Select cards</TitleTopic>

      {cards.map((card: any) => {
        let selected;
        if (selectedCards.includes(card.id)) selected = true;

        let filter: string = "";
        if (level === "0") filter = "common";
        if (level === "1") filter = "rare";
        if (level === "2") filter = "epic";
        if (level === "3") filter = "mythical";

        if (card.category.name === filter)
          return (
            <Card
              action={() => setSelectedCards([...selectedCards, card.id])}
              key={card.id}
              card={card}
              selected={selected}
            />
          );
      })}

      <Footer>
        <Button onClick={getCards} background="#D6962A">
          Receive
        </Button>
      </Footer>
    </Container>
  );
}
