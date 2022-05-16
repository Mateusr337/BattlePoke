import { Key, useEffect, useState } from "react";
import Card from "../../components/card";
import useAuth from "../../hooks/useAuth";
import useCards from "../../hooks/useCards";
import { Pokemon } from "../../interfaces/pokemonInterface";
import { PokemonLevel } from "../../interfaces/pokemonLevelInterface";
import { PokemonType } from "../../interfaces/pokemonTypeInterface";
import { PokemonTypePokemon } from "../../interfaces/pokemonTypePokemon";
import { PokemonUser } from "../../interfaces/PokemonUser";
import api from "../../services/api";
import { Container, Field, FlexColumn, Image, UserInfo } from "./style";

export default function Battle() {
  const userContext = useAuth();
  const cardsContext = useCards();

  const [user, setUser] = useState({} as any);
  const [lifeUser, setLifeUser] = useState(1000 as number);
  const [lifeBot, setLifeBot] = useState(1000 as number);
  const [cardsUser, setCardsUser] = useState(null as null | any);
  const [cardsBot, setCardsBot] = useState([] as Array<any>);

  useEffect(() => {
    api.findUser(userContext.token).then((response) => setUser(response.data));

    api.findCardsByUser(userContext.token).then((response) => {
      setCardsUser(response.data);
    });

    cardsContext.cards.level &&
      api
        .findPokemonsByLevel(userContext.token, cardsContext.cards.level)
        .then((response) => {
          setCardsBot(response.data);
          console.log(response.data);
        });
  }, [cardsContext.cards.level]);

  return (
    <Container>
      <UserInfo position="top">
        <FlexColumn>
          <span>Bot</span>
          <span> Life: {lifeBot}</span>
        </FlexColumn>
      </UserInfo>

      <Field>
        {cardsBot.length !== 0 &&
          cardsBot.map((card: any, i: any) => {
            return <Card key={i} card={card} />;
          })}
      </Field>

      <Field>
        {cardsUser !== null &&
          cardsUser.PokemonUser.map(
            (
              card: PokemonUser & {
                pokemon: Pokemon & {
                  pokemonLevel: PokemonLevel;
                  PokemonTypePokemon: PokemonTypePokemon[] & {
                    pokemonType: PokemonType;
                  };
                };
              },
              i: Key | null | undefined
            ) => {
              return <Card key={i} card={card} />;
            }
          )}
      </Field>

      <UserInfo position="bottom">
        <Image src={user.imageURL} />

        <FlexColumn>
          <span>{user.name}</span>

          <span> Life: {lifeUser}</span>
        </FlexColumn>
      </UserInfo>
    </Container>
  );
}
