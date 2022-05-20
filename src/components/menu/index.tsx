import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";
import { Container } from "./style";
import { IoMdLogOut } from "react-icons/io";

export default function Menu() {
  const context = useAuth();
  const navigate = useNavigate();

  function logoff() {
    context.logoff();
    navigate("/");
  }

  return (
    <Container>
      <Button color="#172b4d" onClick={logoff}>
        <IoMdLogOut fontWeight={900} />
        <span>logout</span>
      </Button>
    </Container>
  );
}
