import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

const config = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

function createUser(name: string, email: string, password: string) {
  const data = {
    name,
    email,
    password,
  };

  const promise = api.post("/users", data);
  return promise;
}

export default {
  createUser,
};
