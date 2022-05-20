import { useEffect, useState } from "react";
import BattleStory from "../../components/battleStory";
import BottomMenu from "../../components/bottomMenu";
import TitleTopic from "../../components/titleTopic";
import useAuth from "../../hooks/useAuth";
import { Battle } from "../../interfaces/battleInterface";
import api from "../../services/api";
import { Container } from "./style";

export default function StoryBattle() {
  const context = useAuth();
  const [battles, setBattles] = useState([] as Array<any>);

  useEffect(() => {
    api
      .findBattlesByUser(context.token)
      .then((response) => setBattles(response.data));
  }, [context.token]);

  return (
    <Container>
      <TitleTopic>story battles</TitleTopic>

      {battles.map((battle: Battle) => (
        <BattleStory key={battle.id} battle={battle} />
      ))}

      {battles.length === 0 && (
        <span>Choose your cards and battle to check your evolution here!</span>
      )}

      <BottomMenu />
    </Container>
  );
}
