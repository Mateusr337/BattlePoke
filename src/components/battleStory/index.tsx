import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Battle } from "../../interfaces/battleInterface";
import { Pokemon } from "../../interfaces/pokemonInterface";
import * as UserIF from "../../interfaces/userInterface";
import api from "../../services/api";
import { Container, DivFlex, Image, Top, User } from "./style";

interface Props {
  battle: Battle;
}

export default function BattleStory({ battle }: Props) {
  const [user, setUser] = useState({} as UserIF.User);
  const [cardsBot, setCardsBot] = useState([] as Array<Pokemon>);
  const [cardsUser, setCardsUser] = useState([] as Array<Pokemon>);

  const context = useAuth();

  useEffect(() => {
    api.findUser(context.token).then((response) => setUser(response.data));

    api
      .findPokemonsByLevel(context.token, parseInt(battle.Level))
      .then((response) => setCardsBot(response.data));

    api
      .findCardsByBattleAndUser(context.token, battle.id)
      .then((response) => setCardsUser(response.data));
  }, []);

  return (
    <Container>
      <Top>{battle.wins ? user.name : "Bot"} wins</Top>

      <DivFlex>
        <User>
          <span>{user.name}</span>

          <DivFlex>
            {cardsUser.map((card: Pokemon, i: number) => (
              <Image level={card.category.name} key={i} src={card.imageURL} />
            ))}
          </DivFlex>
        </User>

        <User>
          <span>Bot level {battle.Level}</span>

          <DivFlex>
            {cardsBot.map((card: Pokemon, i: number) => (
              <Image level={card.category.name} key={i} src={card.imageURL} />
            ))}
          </DivFlex>
        </User>
      </DivFlex>
    </Container>
  );
}
