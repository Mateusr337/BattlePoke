import BottomMenu from "../../components/bottomMenu";
import Cards from "../../components/cards";
import Header from "../../components/header";
import { Container } from "./style";

export default function ProfilePage() {
  return (
    <Container>
      <Header />
      <Cards />
      <BottomMenu />
    </Container>
  );
}
