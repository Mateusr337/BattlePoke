import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BattleLevel from "../../components/battleLevel";
import BottomMenu from "../../components/bottomMenu";
import Button from "../../components/Button";
import Card from "../../components/card";
import useAuth from "../../hooks/useAuth";
import useCards from "../../hooks/useCards";
import api from "../../services/api";
import { CardsContainer, Container } from "./style";

export default function Battles() {
  const [levelSelected, setLevelSelected] = useState(null as number | null);
  const [cardsUser, setCardsUser] = useState([] as Array<any>);
  const [selectedCards, setSelectedCards] = useState([] as Array<number>);
  const userContext = useAuth();
  const cardsContext = useCards();
  const navigate = useNavigate();

  const battleLevels = [1, 2, 3] as Array<1 | 2 | 3>;

  useEffect(() => {
    if (userContext.token)
      api.findCardsByUser(userContext.token).then((response) => {
        setCardsUser(response.data.PokemonUser);
      });
  }, [userContext.token]);

  function selectCards(id: number) {
    setSelectedCards([...selectedCards, id]);

    if (selectedCards.length > 3) {
      setSelectedCards(selectedCards.slice(-3));
    }
  }

  function startBattle() {
    navigate("/battle");
    cardsContext.SetCards(selectedCards, levelSelected);
  }

  return (
    <Container>
      {levelSelected === null ? (
        <>
          {battleLevels.map((level, i) => (
            <BattleLevel
              key={i}
              level={level}
              action={() => setLevelSelected(level)}
            />
          ))}
        </>
      ) : (
        <CardsContainer>
          {cardsUser.map((card, i) => {
            let select: boolean = false;
            if (selectedCards.includes(card.pokemon.id)) select = true;

            return (
              <Card
                selected={select}
                key={i}
                card={card}
                action={() => selectCards(card.pokemon.id)}
              />
            );
          })}
        </CardsContainer>
      )}

      {selectedCards.length === 3 && (
        <Button onClick={startBattle}>Start battle</Button>
      )}

      <BottomMenu />
    </Container>
  );
}
