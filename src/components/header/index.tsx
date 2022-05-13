import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";
import api from "../../services/api";
import Button from "../Button";
import { Container, DivFlex, UserImage, UserInfo } from "./style";

export default function Header() {
  const context = useAuth();
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    api.findUser(context.token).then(({ data }) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  return (
    <Container>
      <DivFlex>
        <UserImage src={user.imageURL} />

        <UserInfo>
          <span>{user.name}</span>
          <span>Level: {user.level}</span>
        </UserInfo>
      </DivFlex>

      <DivFlex>
        <Button>Cards</Button>
        <Button>Battles</Button>
      </DivFlex>
    </Container>
  );
}
