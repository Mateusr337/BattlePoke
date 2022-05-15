import { CardsByUser } from "../../interfaces/cardsByUserInterface";
import Electric from "../pokemonsTypes/electric";
import Fire from "../pokemonsTypes/fire";
import Flying from "../pokemonsTypes/flying";
import Insect from "../pokemonsTypes/insect";
import Normal from "../pokemonsTypes/normal";
import Plant from "../pokemonsTypes/plant";
import Poisonous from "../pokemonsTypes/poisonous";
import Psychic from "../pokemonsTypes/psychic";
import Water from "../pokemonsTypes/water";
import { Container, Data, Image, Types } from "./style";

interface Props {
  action?: any;
  selected?: boolean;
}

export default function Card({ card, action, selected }: CardsByUser & Props) {
  return (
    <Container
      onClick={action}
      level={card.pokemon.pokemonLevel.name}
      selected={selected}
    >
      <Image src={card.pokemon.imageURL} />

      <Types>
        {card.pokemon.PokemonTypePokemon.map(
          (PokemonTypePokemon: any, i: number) => {
            if (PokemonTypePokemon.pokemonType.name === "water")
              return <Water key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "fire")
              return <Fire key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "plant")
              return <Plant key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "normal")
              return <Normal key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "flying")
              return <Flying key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "electric")
              return <Electric key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "insect")
              return <Insect key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "psychic")
              return <Psychic key={i} />;
            if (PokemonTypePokemon.pokemonType.name === "poisonous")
              return <Poisonous key={i} />;
          }
        )}
      </Types>

      <Data>
        <span>Attack: {card.pokemon.attack}</span>
        <span>Life: {card.pokemon.life}</span>
      </Data>
    </Container>
  );
}
