import { useEffect, useState } from "react";
import Card from "../../components/card";
import TitleTopic from "../../components/titleTopic";
import useAuth from "../../hooks/useAuth";
import { Pokemon } from "../../interfaces/pokemonInterface";
import api from "../../services/api";
import { Container, Evolving } from "./style";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function Evolutions() {
  const context = useAuth();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null as null | Pokemon);
  const [evolution, setEvolution] = useState(null as null | Pokemon);

  useEffect(() => {
    const params = window.location.pathname.split("/");
    const evolutionName = params[params.length - 1];
    const pokemonName = params[params.length - 2];

    api
      .findPokemonByName(context.token, pokemonName)
      .then((response) => setPokemon(response.data));

    api
      .findPokemonByName(context.token, evolutionName)
      .then((response) => setEvolution(response.data));
  }, []);

  return (
    <Container>
      <TitleTopic>Evolution</TitleTopic>

      <Evolving>
        {pokemon && <Card card={pokemon} />}

        <MdOutlineDoubleArrow size={50} color="#d6962a" />

        {evolution && <Card card={evolution} />}
      </Evolving>

      <Button onClick={() => navigate("/profile")}>Return to home</Button>
    </Container>
  );
}
