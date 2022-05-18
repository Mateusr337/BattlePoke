import { useNavigate } from "react-router-dom";
import { BattleButton, Container } from "./style";

export default function BottomMenu() {
  const navigate = useNavigate();

  return (
    <Container>
      <span onClick={() => navigate("/profile")}>Your cards</span>

      <BattleButton onClick={() => navigate("/battles")}>Battle</BattleButton>

      <span>Story battles</span>
    </Container>
  );
}
