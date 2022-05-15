import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { PokemonUser } from "../../interfaces/PokemonUser";
import api from "../../services/api";
import Button from "../Button";
import Card from "../card";
import { Container, Footer, Title } from "./style";

interface Props {
  level: string;
}

export default function ToReceiveNewCard({ level }: Props) {
  const context = useAuth();
  const [cards, setCards] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState("null" as string);
  const [selectedCards, setSelectedCards] = useState([] as Array<number>);

  useEffect(() => {
    api.findCards(context.token).then((response) => {
      setCards(response.data);
    });

    if (level === "0") setNumberOfCards("3");
    if (level === "1") setNumberOfCards("2");
  }, []);

  useEffect(() => {
    if (selectedCards.length > 3 && level === "0")
      setSelectedCards(selectedCards.slice(-3));

    if (selectedCards.length > 2 && level === "1")
      setSelectedCards(selectedCards.slice(-2));
  }, [selectedCards]);

  console.log(selectedCards);

  return (
    <Container>
      <Title>Chose {numberOfCards} cards</Title>

      {cards.map((card, i) => {
        const formatCard = { pokemon: card } as any;

        let selected;
        if (selectedCards.includes(i)) selected = true;

        return (
          <Card
            action={() => setSelectedCards([...selectedCards, i])}
            key={i}
            card={formatCard}
            selected={selected}
          />
        );
      })}

      <Footer>
        <Button background="#1AB81F">Chose</Button>
      </Footer>
    </Container>
  );
}
