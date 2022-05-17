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
  action?: React.MouseEventHandler;
  selected?: boolean;
}

export default function Card({ card, action, selected }: any) {
  return (
    <Container
      onClick={action}
      level={card.pokemonLevel.name}
      selected={selected}
      life={card.life}
    >
      <Image src={card.imageURL} />

      <span>{card.name}</span>

      <Types>
        {card.pokemonTypes.map((type: any, i: number) => {
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
