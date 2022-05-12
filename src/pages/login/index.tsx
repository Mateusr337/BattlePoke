import Button from "../../components/Button";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import handleChange from "../../utils/handleChangeInput";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import errorsMessage from "../../utils/errorsMessage";
import { Buttons, Container, Text } from "./styles";
import useAuth from "../../hooks/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const context = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    context.token &&
      api.findSession(context.token).then(({ data }) => console.log(data));
  }, [context.token]);

  function validUser(e: any) {
    e.preventDefault();
    setIsLoading(true);

    api
      .validUser(data.email, data.password)
      .then(({ data }) => {
        context.login(data.token);
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <ToastContainer limit={1} position={"top-center"} />

      <Text>BattlePoke</Text>

      <Form onSubmit={(e) => validUser(e)}>
        <Input
          placeholder="e-mail"
          name="email"
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

        <Buttons>
          <Button
            disabled={isLoading}
            color="#D6962A"
            background="#528F92"
            onClick={() => navigate("/register")}
            type="button"
          >
            I want to register
          </Button>

          <Button type="submit" disabled={isLoading}>
            Sign in
          </Button>
        </Buttons>
      </Form>
    </Container>
  );
}
