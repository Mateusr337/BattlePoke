import { Pokemon } from "../../interfaces/pokemonInterface";
import Electric from "../pokemonsTypes/electric";
import Fire from "../pokemonsTypes/fire";
import Flying from "../pokemonsTypes/flying";
import Insect from "../pokemonsTypes/insect";
import Normal from "../pokemonsTypes/normal";
import Plant from "../pokemonsTypes/plant";
import Poisonous from "../pokemonsTypes/poisonous";
import Psychic from "../pokemonsTypes/psychic";
import Water from "../pokemonsTypes/water";
import { Container, Data, EvolutionContainer, Image, Types } from "./style";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";

interface Props {
  action?: React.MouseEventHandler;
  selected?: boolean;
  card: Pokemon;
  userPoints?: number;
}

export default function Card({ card, action, selected, userPoints }: Props) {
  const context = useAuth();
  const [evolution, setEvolution] = useState(null as null | Pokemon);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    card.evolution &&
      api.findPokemonByName(context.token, card.evolution).then((response) => {
        setEvolution(response.data);
      });

    api.findUser(context.token).then((response) => setUser(response.data));
  }, []);

  return (
    <Container
      onClick={action}
      level={card.category.name}
      selected={selected}
      life={card.life}
    >
      {evolution && user.points >= 5 && (
        <EvolutionContainer>
          <BsArrowUpSquareFill size={20} />
        </EvolutionContainer>
      )}

      <Image src={card.imageURL} />

      <span>{card.name}</span>

      <Types>
        {card.types.map((type: any, i: number) => {
          if (type.name === "water") return <Water key={i} />;
          if (type.name === "fire") return <Fire key={i} />;
          if (type.name === "plant") return <Plant key={i} />;
          if (type.name === "normal") return <Normal key={i} />;
          if (type.name === "flying") return <Flying key={i} />;
          if (type.name === "electric") return <Electric key={i} />;
          if (type.name === "insect") return <Insect key={i} />;
          if (type.name === "psychic") return <Psychic key={i} />;
          if (type.name === "poisonous") return <Poisonous key={i} />;
        })}
      </Types>

      <Data>
        <span>Attack: {card.attack}</span>
        <span>Life: {card.life}</span>
      </Data>
    </Container>
  );
}
