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
  const promise = api.post("/users", {
    name,
    email,
    password,
    imageURL,
  });
  return promise;
}

export default {
  createUser,
};
