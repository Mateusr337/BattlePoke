import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Pokemon } from "../../interfaces/pokemonInterface";
import api from "../../services/api";
import Button from "../Button";
import Card from "../card";
import TitleTopic from "../titleTopic";
import { Buttons, Container } from "./style";

export default function Cards() {
  const context = useAuth();
  const [cardsList, setCardsList] = useState([] as Array<Pokemon>);

  useEffect(() => {
    findPokemons();
  }, []);

  async function findPokemons(filterName?: string) {
    const { data: pokemons } = await api.findCardsByUser(context.token);

    pokemons.sort((a: Pokemon, b: Pokemon) => {
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });

    if (filterName) {
      filter(filterName, pokemons);
    } else {
      setCardsList([...pokemons]);
    }
  }

  function filter(name: string, pokemons: Array<Pokemon>) {
    const cards = pokemons;

    const filteredCards = cards.filter(
      (card: Pokemon) => card.category.name === name
    );
    setCardsList([...filteredCards]);
  }

  return (
    <Container>
      <TitleTopic>your cards</TitleTopic>

      <Buttons>
        <Button onClick={() => findPokemons()}>all</Button>
        <Button onClick={() => findPokemons("common")}>common</Button>
        <Button onClick={() => findPokemons("rare")}>rare</Button>
        <Button onClick={() => findPokemons("epic")}>epic</Button>
        <Button onClick={() => findPokemons("mythical")}>mythical</Button>
      </Buttons>

      {cardsList.length > 0 ? (
        cardsList.map((card, i) => (
          <Card
            list={cardsList}
            setList={setCardsList}
            profile={true}
            key={i}
            card={card}
          />
        ))
      ) : (
        <span>
          you don't have any cards yet, click in "get new cards" button!
        </span>
      )}
    </Container>
  );
}
