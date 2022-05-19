import Logo from "../logo";
import { Container, Title } from "./style";

interface Props {
  children: string;
}

export default function TitleTopic({ children }: Props) {
  return (
    <Container>
      <Logo /> - <Title>{children}</Title>
    </Container>
  );
}
