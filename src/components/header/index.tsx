import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";
import api from "../../services/api";
import { Container, DivFlex, ToReceive, UserImage, UserInfo } from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdForwardToInbox } from "react-icons/md";
import ToReceiveNewCard from "../toReceiveNewCard";

export default function Header() {
  const context = useAuth();
  const [user, setUser] = useState({} as User);
  const [toReceive, setToReceive] = useState("false");
  const [toReceiveScreen, setToReceiveScreen] = useState(false);

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

  useEffect(() => {
    api.findCardsByUser(context.token).then(({ data }) => {
      if (data.PokemonUser.length < 3) return setToReceive("0");

      if (data.PokemonUser.length < 5 && data.level >= 1)
        return setToReceive("2");
      if (data.PokemonUser.length < 7 && data.level >= 2)
        return setToReceive("2");
      if (data.PokemonUser.length < 7 && data.level >= 3)
        return setToReceive("1");
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

        <ToReceive onClick={() => setToReceiveScreen(true)}>
          <MdForwardToInbox
            size={30}
            color={toReceive !== "false" ? "#d6962a" : "#000000"}
          />
          <span>Get new cards</span>
        </ToReceive>
      </Container>

      {toReceiveScreen && (
        <ToReceiveNewCard
          level={user.level}
          setToReceiveScreen={setToReceiveScreen}
        />
      )}

      <ToastContainer limit={1} position={"top-center"} />
    </>
  );
}
