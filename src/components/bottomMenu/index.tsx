import { useNavigate } from "react-router-dom";
import { BattleButton, Container } from "./style";

interface Props {
  disabledButtonCenter?: boolean;
}

export default function BottomMenu({ disabledButtonCenter }: Props) {
  const navigate = useNavigate();

  return (
    <Container>
      <span onClick={() => navigate("/profile")}>Your cards</span>

      {disabledButtonCenter !== false && (
        <BattleButton onClick={() => navigate("/battles")}>Battle</BattleButton>
      )}

      <span onClick={() => navigate("/storyBattles")}>Story battles</span>
    </Container>
  );
}
