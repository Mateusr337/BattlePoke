import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../Button";
import { Container } from "./style";

export default function Menu() {
  const context = useAuth();
  const navigate = useNavigate();

  function logoff() {
    context.logoff();
    navigate("/");
  }

  return (
    <Container>
      <Button color="#000000" onClick={logoff}>
        logout
      </Button>
    </Container>
  );
}
