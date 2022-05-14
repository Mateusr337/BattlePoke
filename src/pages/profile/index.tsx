import { useState } from "react";
import Cards from "../../components/cards";
import Header from "../../components/header";
import { Container } from "./style";

export default function ProfilePage() {
  const [page, setPage] = useState(<Cards />);
  return (
    <Container>
      <Header />
      {page}
    </Container>
  );
}
