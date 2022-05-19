import { Container, Text } from "./style";
import { MdCatchingPokemon } from "react-icons/md";

export default function Logo() {
  return (
    <Container>
      <Text>BattlePoke</Text>
      <MdCatchingPokemon size={60} color={"#d6962a"} />
    </Container>
  );
}
