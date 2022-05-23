import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Pokemon } from "../../interfaces/pokemonInterface";
import api from "../../services/api";
import Card from "../card";
import TitleTopic from "../titleTopic";
import { Container } from "./style";

export default function Cards() {
  const context = useAuth();
  const [cardsList, setCardsList] = useState([] as Array<Pokemon>);

  useEffect(() => {
    if (context.token) findPokemons();
  }, [context.token]);

  function findPokemons() {
    setInterval(() => {
      api.findCardsByUser(context.token).then((response) => {
        response.data.sort((a: Pokemon, b: Pokemon) => {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        });
        if (response.data !== cardsList) setCardsList(response.data);
      });
    }, 0.5 * 1000);
  }

  return (
    <Container>
      <TitleTopic>Your cards</TitleTopic>

      {cardsList.length > 0 ? (
        cardsList.map((card, i) => <Card profile={true} key={i} card={card} />)
      ) : (
        <span>
          you don't have any cards yet, click the "get new cards" button!
        </span>
      )}
    </Container>
  );
}
