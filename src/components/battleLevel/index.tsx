import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Pokemon } from "../../interfaces/pokemonInterface";
import api from "../../services/api";
import { Container, Image, PokemonBox, Title } from "./style";

interface Props {
  level: 1 | 2 | 3;
  action?: React.MouseEventHandler;
}

export default function BattleLevel({ level, action }: Props) {
  const context = useAuth();
  const [pokemons, setPokemons] = useState([] as Array<Pokemon>);

  useEffect(() => {
    api.findPokemonsByLevel(context.token, level).then((response) => {
      setPokemons(response.data);
    });
  }, []);

  return (
    <Container onClick={action}>
      <Title>Level {level}</Title>

      {pokemons.map((pokemon: any) => (
        <PokemonBox>
          <Image src={pokemon.imageURL} />
          <span>{pokemon.name}</span>
        </PokemonBox>
      ))}
    </Container>
  );
}
