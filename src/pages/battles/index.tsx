import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BattleLevel from "../../components/battleLevel";
import BottomMenu from "../../components/bottomMenu";
import Button from "../../components/Button";
import Card from "../../components/card";
import TitleTopic from "../../components/titleTopic";
import useAuth from "../../hooks/useAuth";
import { Pokemon } from "../../interfaces/pokemonInterface";
import { User } from "../../interfaces/userInterface";
import api from "../../services/api";
import { ButtonContainer, CardsContainer, Container } from "./style";

export default function Battles() {
  const context = useAuth();
  const navigate = useNavigate();

  const [levelSelected, setLevelSelected] = useState(null as number | null);
  const [user, setUser] = useState({} as User);
  const [cardsUser, setCardsUser] = useState([] as Array<any>);
  const [selectedCards, setSelectedCards] = useState([] as Array<number>);
  const [selectedIds, setSelectedIds] = useState([] as Array<number>);

  const battleLevels = [1, 2, 3, 4, 5, 6, 7, 8] as Array<1 | 2 | 3>;

  useEffect(() => {
    api.findCardsByUser(context.token).then((response) => {
      response.data.sort((a: Pokemon, b: Pokemon) => {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
      });
      setCardsUser(response.data);
    });

    api.findUser(context.token).then((response) => setUser(response.data));
  }, []);

  function selectCards(key: number, id: number) {
    if (selectedCards.includes(key)) return;

    if (selectedCards.length === 3) {
      setSelectedCards([...selectedCards.slice(-2), key]);
      setSelectedIds([...selectedIds.slice(-2), id]);
    } else {
      setSelectedCards([...selectedCards, key]);
      setSelectedIds([...selectedIds, id]);
    }
  }

  function startBattle() {
    levelSelected !== null &&
      api
        .createBattle(context.token, levelSelected, selectedIds)
        .then((response) => {
          const battleId = response.data.id;
          navigate(`/battles/${battleId}`);
        });
  }

  return (
    <Container>
      {levelSelected === null ? (
        <>
          <TitleTopic>Battles Levels</TitleTopic>

          {battleLevels.map((level) => (
            <BattleLevel
              key={level.toString()}
              level={level}
              action={() => setLevelSelected(level)}
              userLevel={user.level}
            />
          ))}
        </>
      ) : (
        <CardsContainer>
          <TitleTopic>Select 3 cards</TitleTopic>

          {cardsUser.map((card, i) => {
            let select: boolean = false;
            if (selectedCards.includes(i)) select = true;

            return (
              <Card
                selected={select}
                key={i}
                card={card}
                action={() => selectCards(i, card.id)}
              />
            );
          })}
        </CardsContainer>
      )}

      {levelSelected !== null && (
        <ButtonContainer>
          {selectedCards.length === 3 ? (
            <Button onClick={startBattle} background="#F99640">
              Start battle
            </Button>
          ) : (
            <Button disabled={true} onClick={startBattle} background="#F99640">
              Select cards
            </Button>
          )}
        </ButtonContainer>
      )}

      <BottomMenu
        disabledButtonCenter={levelSelected !== null ? false : true}
      />
    </Container>
  );
}
