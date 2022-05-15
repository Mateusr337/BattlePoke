import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { Container } from "./style";

interface Props {
  level: 1 | 2 | 3;
}

export default function BattleLevel({ level }: Props) {
  const context = useAuth();

  useEffect(() => {
    api
      .findPokemonsByLevel(context.token, level)
      .then((response) => console.log(response.data));
  }, []);

  return <Container></Container>;
}
