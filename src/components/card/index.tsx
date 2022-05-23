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
import { Container, Data, IconsContainer, Image, Life, Types } from "./style";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";
import { useNavigate } from "react-router-dom";

interface Props {
  action?: React.MouseEventHandler;
  selected?: boolean;
  card: Pokemon;
  profile?: true;
  shake?: true;
  list?: Array<Pokemon>;
  setList?: any;
}

export default function Card({
  card,
  action,
  selected,
  profile,
  shake,
  list,
  setList,
}: Props) {
  const context = useAuth();
  const navigate = useNavigate();

  const [evolution, setEvolution] = useState(null as null | Pokemon);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    card.evolution &&
      api.findPokemonByName(context.token, card.evolution).then((response) => {
        setEvolution(response.data);
      });

    api.findUser(context.token).then((response) => setUser(response.data));
  }, []);

  function evolve() {
    evolution &&
      api.evolutionPokemon(context.token, card.id).then(() => {
        navigate(`/evolutions/${card.name}/${evolution.name}`);
      });
  }

  function remove() {
    api.removeCard(context.token, card.id);

    const index = list?.indexOf(card);
    let newList = list;

    index && newList?.splice(index, 1);
    newList && setList([...newList]);
  }

  return (
    <Container
      onClick={action}
      level={card.category.name}
      selected={selected}
      life={card.life}
      shake={shake}
    >
      {profile && (
        <IconsContainer>
          {evolution && user.points >= 5 && (
            <BsFillArrowUpCircleFill
              color="#FF6600"
              size={18}
              onClick={evolve}
            />
          )}

          <RiDeleteBin2Fill color="darkred" size={22} onClick={remove} />
        </IconsContainer>
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
        <Life shake={shake}>Life: {card.life}</Life>
      </Data>
    </Container>
  );
}
