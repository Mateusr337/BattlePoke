import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";
import api from "../../services/api";
import { Container, DivFlex, ToReceive, UserImage, UserInfo } from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdForwardToInbox } from "react-icons/md";
import ToReceiveNewCard from "../toReceiveNewCard";
import Menu from "../menu";

export default function Header() {
  const context = useAuth();
  const [user, setUser] = useState({} as User);
  const [toReceive, setToReceive] = useState("false" as string);
  const [toReceiveScreen, setToReceiveScreen] = useState(false as boolean);
  const [showMenu, setShowMenu] = useState(false as boolean);

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
      if (data.length < 3) return setToReceive("0");

      if (data.length < 5 && parseInt(user.level) >= 1)
        return setToReceive("2");
      if (data.length < 7 && parseInt(user.level) >= 2)
        return setToReceive("2");
      if (data.length < 7 && parseInt(user.level) >= 3)
        return setToReceive("1");
    });
  }, []);

  function toggleShowMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <>
      <Container>
        <DivFlex>
          <UserImage src={user.imageURL} onClick={toggleShowMenu} />

          <UserInfo>
            <span>{user.name}</span>
            <span>Level {user.level}</span>
          </UserInfo>
        </DivFlex>

        {showMenu && <Menu />}

        {toReceive !== "false" && (
          <ToReceive onClick={() => setToReceiveScreen(true)}>
            <MdForwardToInbox size={30} color={"#d6962a"} />
            <span>Get new cards</span>
          </ToReceive>
        )}
      </Container>

      {toReceiveScreen && toReceive !== "false" && (
        <ToReceiveNewCard
          level={user.level}
          setToReceiveScreen={setToReceiveScreen}
        />
      )}

      <ToastContainer limit={1} position={"top-center"} />
    </>
  );
}
