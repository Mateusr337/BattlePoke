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

export default {
  createUser,
  validUser,
  findSession,
  findUser,
};
