import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BattleLevel from "../../components/battleLevel";
import BottomMenu from "../../components/bottomMenu";
import Button from "../../components/Button";
import Card from "../../components/card";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { CardsContainer, Container } from "./style";

export default function Battles() {
  const [levelSelected, setLevelSelected] = useState(null as number | null);
  const [cardsUser, setCardsUser] = useState([] as Array<any>);
  const [selectedCards, setSelectedCards] = useState([] as Array<number>);
  const context = useAuth();
  const navigate = useNavigate();

  const battleLevels = [1, 2, 3] as Array<1 | 2 | 3>;

  useEffect(() => {
    if (context.token)
      api.findCardsByUser(context.token).then((response) => {
        setCardsUser(response.data);
      });
  }, [context.token]);

  function selectCards(id: number) {
    if (selectedCards.length === 3) {
      setSelectedCards(selectedCards.slice(-2));
    }
    setSelectedCards([...selectedCards, id]);
  }

  function startBattle() {
    levelSelected !== null &&
      api
        .createBattle(context.token, levelSelected, selectedCards)
        .then((response) => {
          const battleId = response.data.id;
          navigate(`/battles/${battleId}`);
        });
  }

  return (
    <Container>
      {levelSelected === null ? (
        <>
          {battleLevels.map((level) => (
            <BattleLevel
              key={level.toString()}
              level={level}
              action={() => setLevelSelected(level)}
            />
          ))}
        </>
      ) : (
        <CardsContainer>
          {cardsUser.map((card, i) => {
            let select: boolean = false;
            if (selectedCards.includes(card.id)) select = true;

            return (
              <Card
                selected={select}
                key={i}
                card={card}
                action={() => selectCards(card.id)}
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
