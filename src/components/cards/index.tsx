import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Card from "../card";
import { Container, Text } from "./style";

export default function Cards() {
  const context = useAuth();
  const [cardsList, setCardsList] = useState([] as Array<any>);

  useEffect(() => {
    if (context.token) findPokemons();
  }, [context.token]);

  function findPokemons() {
    setInterval(() => {
      api.findCardsByUser(context.token).then((response) => {
        if (response.data !== cardsList) setCardsList(response.data);
      });
    }, 1 * 1000);
  }

  return (
    <Container>
      {cardsList.length > 0 ? (
        cardsList.map((card, i) => <Card key={i} card={card} />)
      ) : (
        <Text>
          you don't have any cards yet, click the "get new cards" button!
        </Text>
      )}
    </Container>
  );
}
