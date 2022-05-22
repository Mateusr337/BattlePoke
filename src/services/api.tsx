import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const config = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

function createUser(
  name: string,
  email: string,
  password: string,
  imageURL: string
) {
  const data = {
    name,
    email,
    password,
    imageURL,
  };

  const promise = api.post("/users", data);
  return promise;
}

function validUser(email: string, password: string) {
  const data = {
    email,
    password,
  };

  const promise = api.post("/users/login", data);
  return promise;
}

function findSession(token: string) {
  const promise = api.post(`/users/validToken`, {}, config(token));
  return promise;
}

function findUser(token: string) {
  const promise = api.get("/users", config(token));
  return promise;
}

function findCardsByUser(token: string) {
  const promise = api.get("/cards/user", config(token));
  return promise;
}

function findCards(token: string) {
  const promise = api.get("/cards", config(token));
  return promise;
}

function createPokemonUser(token: string, cards: Array<number>) {
  const promise = api.post("/cards", { cards }, config(token));
  return promise;
}

function findPokemonsByLevel(token: string, level: number) {
  const promise = api.get(`/cards/battles/${level}`, config(token));
  return promise;
}

function createBattle(
  token: string,
  level: number,
  pokemonsIds: Array<number>
) {
  const promise = api.post("/battles", { pokemonsIds, level }, config(token));
  return promise;
}

function findCardsByBattleAndUser(token: string, battleId: number) {
  const promise = api.get(`/cards/users/battles/${battleId}`, config(token));
  return promise;
}

function findBattleById(token: string, id: number) {
  const promise = api.get(`/battles/${id}`, config(token));
  return promise;
}

function updateLevelUser(token: string, newLevel: string) {
  const promise = api.patch(
    `/users/upLevels`,
    { level: newLevel },
    config(token)
  );
  return promise;
}

function findBattlesByUser(token: string) {
  const promise = api.get("/storyBattles/users", config(token));
  return promise;
}

function finishBattle(token: string, battleId: number, wins: boolean) {
  const body = {
    id: battleId,
    wins,
    finish: true,
  };

  const promise = api.patch("/battles", body, config(token));
  return promise;
}

function findPokemonByName(token: string, name: string) {
  const promise = api.get(`/cards/${name}`, config(token));
  return promise;
}

function evolutionPokemon(token: string, pokemonId: number) {
  const promise = api.patch("/cards/evolution", { pokemonId }, config(token));
  return promise;
}

export default {
  createUser,
  validUser,
  findSession,
  findUser,
  findCardsByUser,
  findCards,
  createPokemonUser,
  findPokemonsByLevel,
  createBattle,
  findCardsByBattleAndUser,
  findBattleById,
  updateLevelUser,
  findBattlesByUser,
  finishBattle,
  findPokemonByName,
  evolutionPokemon,
};
