import React, { Key, SetStateAction, useEffect, useState } from "react";
import Card from "../../components/card";
import useAuth from "../../hooks/useAuth";
import useCards from "../../hooks/useCards";
import api from "../../services/api";
import { Container, Field, FlexColumn, Image, UserInfo } from "./style";

export default function Battle() {
  const userContext = useAuth();
  const cardsContext = useCards();

  const [user, setUser] = useState({} as any);
  const [lifeUser, setLifeUser] = useState(1000 as number);
  const [lifeBot, setLifeBot] = useState(1000 as number);
  const [cardsUser, setCardsUser] = useState([] as Array<any>);
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
        });
  }, [cardsContext.cards.level]);

  useEffect(() => {
    if (cardsBot.length > 0 && cardsUser.length > 0) {
      setTimeout(() => {
        damageRound(cardsUser, cardsBot, setCardsBot, setLifeBot, lifeBot);
      }, 2 * 1000);

      setTimeout(() => {
        damageRound(cardsBot, cardsUser, setCardsUser, setLifeUser, lifeUser);
      }, 4 * 1000);
    }
  }, [cardsUser]);

  function damageRound(
    cardsAttack: Array<any>,
    cardsDefense: Array<any>,
    setCardsDefense: React.Dispatch<SetStateAction<Array<any>>>,
    setLifeDefense: React.Dispatch<SetStateAction<number>>,
    lifeDefense: number
  ) {
    if (lifeBot > 0 && lifeUser > 0) {
      cardsAttack.map((pokemon: any, i: number) => {
        const damage = pokemon.attack;
        const cards = cardsDefense;

        if (parseInt(cardsDefense[i].life) > 0) {
          cards[i].life = cards[i].life - damage;
        } else {
          setLifeDefense(lifeDefense - damage);
        }

        setCardsDefense(cards);
      });
    }
  }

  if (lifeBot < 0 || lifeUser < 0) {
    const winner = lifeBot <= lifeUser ? user.name : "Bot";
    alert(`WINNER: ${winner}`);
  }

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
          cardsUser.map((card: any, i: number) => {
            return <Card key={i} card={card} />;
          })}
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
