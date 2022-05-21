import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { User } from "../../interfaces/userInterface";
import api from "../../services/api";
import { Container, DivFlex, ToReceive, UserImage, UserInfo } from "./style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdForwardToInbox } from "react-icons/md";
import ToReceiveNewCard from "../../pages/toReceiveNewCard";
import Menu from "../menu";
import { AxiosResponse } from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  const context = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({} as User);
  const [toReceive, setToReceive] = useState("false" as string);
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

    api.findCardsByUser(context.token).then(({ data }: AxiosResponse) => {
      if (data.length < 3 && toReceive === "false") setToReceive("0");
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
          <ToReceive onClick={() => navigate(`/receive/0`)}>
            <MdForwardToInbox size={30} color={"#d6962a"} />
            <span>Get new cards</span>
          </ToReceive>
        )}
      </Container>

      <ToastContainer limit={1} position={"top-center"} />
    </>
  );
}
