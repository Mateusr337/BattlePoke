import Button from "../../components/Button";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Buttons, Container, Text } from "./styles";
import handleChange from "../../utils/handleChangeInput";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import errorsMessage from "../../utils/errorsMessage";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    name: "",
    imageURL: "",
    password: "",
    confirmPassword: "",
  });

  function sendUserData(e: any) {
    api
      .createUser(data.name, data.email, data.password, data.imageURL)
      .then((response) => {
        navigate("/");
      })

      .catch((error) => {
        errorsMessage(error.message);
      });
  }

  async function validInputs(e: any) {
    e.preventDefault();
    setIsLoading(true);

    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords must be the same!");
    }
    if (data.password.length < 6 || data.password.length > 12) {
      return toast.error("Password must be between 6 and 12 characters!");
    }
    await sendUserData(e);

    setIsLoading(false);
  }

  return (
    <Container>
      <ToastContainer limit={1} position={"top-center"} />

      <Text>BattlePoke</Text>

      <Form onSubmit={(e) => validInputs(e)}>
        <Input
          placeholder="e-mail"
          name="email"
          onChange={(e) => handleChange(e, data, setData)}
          disabled={isLoading}
          required
        />

        <Input
          placeholder="name"
          name="name"
          onChange={(e) => handleChange(e, data, setData)}
          disabled={isLoading}
          required
        />

        <Input
          placeholder="image URL"
          name="imageURL"
          onChange={(e) => handleChange(e, data, setData)}
          disabled={isLoading}
          required
        />

        <Input
          placeholder="password"
          type="password"
          name="password"
          onChange={(e) => handleChange(e, data, setData)}
          disabled={isLoading}
          required
        />

        <Input
          placeholder="password"
          type="password"
          name="confirmPassword"
          onChange={(e) => handleChange(e, data, setData)}
          disabled={isLoading}
          required
        />

        <Buttons>
          <Button
            disabled={isLoading}
            color="#D6962A"
            background="#528F92"
            onClick={() => navigate("/")}
          >
            I already have an account
          </Button>

          <Button disabled={isLoading}>Register</Button>
        </Buttons>
      </Form>
    </Container>
  );
}
