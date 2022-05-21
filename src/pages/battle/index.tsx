import React, { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/card";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";
import api from "../../services/api";
import {
  Container,
  Field,
  FinalBackground,
  FinalScreen,
  FlexColumn,
  Image,
  Text,
  UserInfo,
  Winner,
} from "./style";
import { FaRobot } from "react-icons/fa";

export default function Battle() {
  const context = useAuth();
  const navigate = useNavigate();

  const [render, setRender] = useState(0 as number);
  const [level, setLevel] = useState("0" as string);
  const [winner, setWinner] = useState("" as string);

  const [user, setUser] = useState({} as User);
  const [lifeUser, setLifeUser] = useState(50 as number);
  const [lifeBot, setLifeBot] = useState(50 as number);
  const [cardsUser, setCardsUser] = useState([] as Array<any>);
  const [cardsBot, setCardsBot] = useState([] as Array<any>);

  useEffect(() => {
    api.findUser(context.token).then((response) => setUser(response.data));

    const battleId = parseInt(window.location.href.split("/").slice(-1)[0]);

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
    startRound();
  }, [cardsUser.length, render]);

  useEffect(() => {
    if ((lifeBot <= 0 || lifeUser <= 0) && winner === "") {
      setWinner(lifeBot < lifeUser ? user.name : "Bot");
    }
  }, [lifeBot, lifeUser]);

  async function startRound() {
    if (cardsBot.length > 0 && cardsBot.length > 0) {
      setTimeout(() => {
        damage(cardsUser, cardsBot, setCardsBot, setLifeBot, lifeBot);
      }, 1 * 1000);

      setTimeout(() => {
        damage(cardsBot, cardsUser, setCardsUser, setLifeUser, lifeUser);
      }, 2 * 1000);
    }

    setTimeout(() => setRender(render + 1), 2 * 1000);
  }

  function damage(
    cardsAttack: Array<any>,
    cardsDefense: Array<any>,
    setCardsDefense: React.Dispatch<SetStateAction<Array<any>>>,
    setLifeDefense: React.Dispatch<SetStateAction<number>>,
    lifeDefense: number
  ) {
    if (winner !== "") return "finished";

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

  function exitBattle() {
    const battleId = parseInt(window.location.href.split("/").slice(-1)[0]);
    const wins = lifeBot < lifeUser ? true : false;

    if (lifeBot < lifeUser && user.level < level) {
      api.updateLevelUser(context.token, `${level}`);
    }

    api.finishBattle(context.token, battleId, wins).finally(() => {
      if (lifeBot < lifeUser) {
        navigate(`/receive/${level}`);
      } else {
        navigate("/profile");
      }
    });
  }

  return (
    <Container>
      <UserInfo position="top">
        <FaRobot size={50} color="#C0C0C0" />
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

      {winner && (
        <>
          <FinalScreen>
            <Winner>winner {winner}</Winner>
            {winner !== "" && winner !== "Bot" && user.level < level && (
              <Text>You leveled up {parseInt(level) + 1}</Text>
            )}

            <Button onClick={exitBattle}>Return to home</Button>
          </FinalScreen>

          <FinalBackground />
        </>
      )}
    </Container>
  );
}
