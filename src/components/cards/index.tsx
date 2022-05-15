import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Card from "../card";
import { Container } from "./style";

export default function Cards() {
  const context = useAuth();
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    if (context.token)
      api.findCardsByUser(context.token).then((response) => {
        setCardsList(response.data.PokemonUser);
      });
  }, [context.token]);

  return (
    <Container>
      {cardsList.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </Container>
  );
}