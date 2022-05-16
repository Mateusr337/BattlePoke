import { useContext } from "react";

import CardsContext from "../contexts/cadsBattling";

const useCards = () => {
  return useContext(CardsContext) as any;
};

export default useCards;
