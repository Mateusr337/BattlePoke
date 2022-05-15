import BattleLevel from "../../components/battleLevel";
import BottomMenu from "../../components/bottomMenu";
import { Container } from "./style";

export default function Battles() {
  return (
    <Container>
      <BattleLevel level={1} />

      <BattleLevel level={2} />

      <BattleLevel level={3} />

      <BottomMenu />
    </Container>
  );
}
