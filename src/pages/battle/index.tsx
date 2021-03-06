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
  InfoBattle,
  Text,
  UserInfo,
  Winner,
} from "./style";
import { FaRobot } from "react-icons/fa";
import { Pokemon } from "../../interfaces/pokemonInterface";

export default function Battle() {
  const context = useAuth();
  const navigate = useNavigate();

  const [render, setRender] = useState(0 as number);
  const [level, setLevel] = useState("0" as string);
  const [winner, setWinner] = useState("" as string);
  const [shake, setShake] = useState(null as null | "bot" | "user");

  const [user, setUser] = useState({} as User);
  const [lifeUser, setLifeUser] = useState(500 as number);
  const [lifeBot, setLifeBot] = useState(500 as number);
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
    if (
      cardsBot.length > 0 &&
      cardsBot.length > 0 &&
      lifeBot > 0 &&
      lifeUser > 0
    ) {
      setTimeout(() => {
        damage(cardsUser, cardsBot, setCardsBot, setLifeBot, lifeBot);
        setShake("bot");
      }, 1 * 1000);

      setTimeout(() => {
        damage(cardsBot, cardsUser, setCardsUser, setLifeUser, lifeUser);
        lifeBot > 0 && setShake("user");
      }, 2 * 1000);
    }

    setTimeout(() => setRender(render + 1), 2 * 1000);
  }

  function damage(
    cardsAttack: Array<Pokemon>,
    cardsDefense: Array<Pokemon>,
    setCardsDefense: React.Dispatch<SetStateAction<Array<any>>>,
    setLifeDefense: React.Dispatch<SetStateAction<number>>,
    lifeDefense: number
  ) {
    if (winner !== "") return "finish";

    const cards = cardsDefense;

    cardsAttack.map((pokemon: any, i: number) => {
      if (pokemon.life <= 0) return;
      const damage = pokemon.attack;

      if (cardsDefense[i].life > 0) {
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
      <UserInfo position="top" life={lifeBot}>
        <h1>{shake === "user" && "Attack"}</h1>

        <FaRobot size={50} color="#C0C0C0" className="IconBot" />

        <FlexColumn>
          <span>Bot</span>
          <span> Life: {lifeBot}</span>
        </FlexColumn>
      </UserInfo>

      <Field>
        {cardsBot.length !== 0 &&
          cardsBot.map((card: Pokemon, i: number) => {
            return (
              <Card
                life={card.life}
                key={i}
                card={card}
                shake={
                  shake === "bot" && cardsUser[i].life > 0 && card.life > 0
                    ? true
                    : undefined
                }
              />
            );
          })}
      </Field>

      <Field>
        {cardsUser.length !== 0 &&
          cardsUser.map((card: Pokemon, i: number) => {
            return (
              <Card
                life={card.life}
                key={i}
                card={card}
                shake={
                  shake === "user" && cardsBot[i].life > 0 && card.life > 0
                    ? true
                    : undefined
                }
              />
            );
          })}
      </Field>

      <UserInfo position="bottom" life={lifeUser}>
        <h1>{shake === "bot" && "Attack"}</h1>

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

      <InfoBattle>
        The battle ends when your or the robot's life ends!
      </InfoBattle>
    </Container>
  );
}
