import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Pokemon } from "../../interfaces/pokemonInterface";
import api from "../../services/api";
import { Container, ContainerBlock, Image, PokemonBox, Title } from "./style";
import { RiLock2Fill } from "react-icons/ri";

interface Props {
  level: 1 | 2 | 3;
  action?: React.MouseEventHandler;
  userLevel: string;
}

export default function BattleLevel({ level, action, userLevel }: Props) {
  const context = useAuth();
  const [pokemons, setPokemons] = useState([] as Array<Pokemon>);

  useEffect(() => {
    api.findPokemonsByLevel(context.token, level).then((response) => {
      setPokemons(response.data);
    });
  }, []);

  function verifyLevel() {
    if (parseInt(userLevel) + 1 < level) return true;
    return false;
  }

  return (
    <Container disabled={verifyLevel()} onClick={action}>
      {verifyLevel() && (
        <ContainerBlock>
          <RiLock2Fill size={50} />
          <span>Lock</span>
        </ContainerBlock>
      )}

      <Title>Level {level}</Title>

      {pokemons.map((pokemon: Pokemon, i: number) => (
        <PokemonBox key={i}>
          <Image src={pokemon.imageURL} level={pokemon.category.name} />
          <span>{pokemon.name}</span>
        </PokemonBox>
      ))}
    </Container>
  );
}
