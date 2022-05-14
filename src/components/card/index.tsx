import * as CardInterface from "../../interfaces/cardInterface";
import Water from "../pokemonsTypes/water";
import { Container, Data, Image, Types } from "./style";

interface Props {
  card: any;
}

export default function Card({ card }: Props) {
  return (
    <Container>
      <Image src={card.pokemon.imageURL} />

      <Types>{card.pokemonType.name === "water" ? <Water /> : ""}</Types>

      <Data>
        <span>Attack: {card.pokemon.attack}</span>
        <span>Life: {card.pokemon.life}</span>
      </Data>
    </Container>
  );
}
