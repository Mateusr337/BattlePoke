import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";
import api from "../../services/api";
import Button from "../Button";
import { Container, DivFlex, UserImage, UserInfo } from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const context = useAuth();
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    api
      .findUser(context.token)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        toast.error("Failed with internal error. Please reload the page!");
      });
  }, []);

  return (
    <>
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

      <ToastContainer limit={1} position={"top-center"} />
    </>
  );
}
