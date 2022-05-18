import React, { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { Container, Field, FlexColumn, Image, UserInfo } from "./style";

export default function Battle() {
  const context = useAuth();
  const navigate = useNavigate();

  const [render, setRender] = useState(0 as number);
  const [level, setLevel] = useState(0 as number);

  const [user, setUser] = useState({} as any);
  const [lifeUser, setLifeUser] = useState(1000 as number);
  const [lifeBot, setLifeBot] = useState(1000 as number);
  const [cardsUser, setCardsUser] = useState([] as Array<any>);
  const [cardsBot, setCardsBot] = useState([] as Array<any>);

  useEffect(() => {
    api.findUser(context.token).then((response) => setUser(response.data));

    const battleId = parseInt(window.location.href.slice(-1));

    api.findBattleById(context.token, battleId).then((response) => {
      setLevel(response.data.Level);

      api
        .findPokemonsByLevel(context.token, response.data.Level)
        .then((response) => setCardsBot(response.data));
    });

    api
      .findCardsByBattleAndUser(context.token, battleId)
      .then((response) => setCardsUser(response.data));
  }, []);

  useEffect(() => {
    if (cardsBot.length > 0 && cardsUser.length > 0) {
      startRound();
    }
  }, [cardsUser.length, render]);

  async function startRound() {
    setTimeout(() => {
      console.log("oi");
      console.log(cardsBot);
      damage(cardsUser, cardsBot, setCardsBot, setLifeBot, lifeBot);
    }, 2 * 1000);

    setTimeout(() => {
      console.log("hello");
      console.log(cardsUser);
      damage(cardsBot, cardsUser, setCardsUser, setLifeUser, lifeUser);
    }, 4 * 1000);

    setTimeout(() => setRender(render + 1), 4 * 1000);
  }

  function damage(
    cardsAttack: Array<any>,
    cardsDefense: Array<any>,
    setCardsDefense: React.Dispatch<SetStateAction<Array<any>>>,
    setLifeDefense: React.Dispatch<SetStateAction<number>>,
    lifeDefense: number
  ) {
    if (finishBattle()) return "finished";

    const cards = cardsDefense;

    cardsAttack.map((pokemon: any, i: number) => {
      const damage = pokemon.attack;

      if (parseInt(cardsDefense[i].life) > 0) {
        cards[i].life -= damage;
      } else {
        setLifeDefense(lifeDefense - damage);
      }
    });

    setCardsDefense([...cards]);
  }

  function finishBattle() {
    if (lifeBot < 0 || lifeUser < 0) {
      const winner = lifeBot <= lifeUser ? user.name : "Bot";
      alert(`WINNER: ${winner}`);
      setTimeout(() => navigate("/profile"), 2 * 1000);
      return true;
    }

    return false;
  }

  async function delay(time: number): Promise<void> {
    return await new Promise((resolver, _reject) => {
      setTimeout(resolver, time);
    });
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
