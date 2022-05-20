import { useState } from "react";
import BottomMenu from "../../components/bottomMenu";
import Cards from "../../components/cards";
import Header from "../../components/header";
import { Container } from "./style";

export default function ProfilePage() {
  const [page, setPage] = useState((<Cards />) as JSX.Element);

  return (
    <Container>
      <Header />
      {page}
      <BottomMenu />
    </Container>
  );
}
