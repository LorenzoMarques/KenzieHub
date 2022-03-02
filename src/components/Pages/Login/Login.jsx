import { Form } from "./style.js";
import Logo from "../../imagens/Logo.png";
import { Img } from "../../StyledImg/StyledImg";
import { Button } from "../../styledButton/StyledButton";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import api from "../../../services/api.jsx";

const Login = ({ auth, setAuth }) => {
  const history = useHistory();
  const registerPage = () => {
    history.push("/register");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const transform = (email, password) => {
    const result = {
      email: email,
      password: password,
    };
    return result;
  };

  const submit = (e) => {
    api
      .post("/sessions", transform(email, password))
      .then((res) => {
        setAuth(true);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/technologies");
      })
      .catch((res) => toast.error("Email ou senha inválidos"));
  };

  return (
    <div>
      <Img src={Logo} />
      <Form onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>
        <p>Email</p>
        <input
          type="text"
          {...register("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error"> {errors.email.message}</span>}

        <p>Senha</p>
        {errors.password && (
          <span className="error"> {errors.password.message}</span>
        )}

        <input
          {...register("password")}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="#FF577F;"
          borderColor="#FF577F;
          "
        >
          Entrar
        </Button>
        <span>Ainda não possui uma conta?</span>
        <Button
          onClick={registerPage}
          backgroundColor="#868E96"
          borderColor=" #868E96;"
        >
          Cadastre-se
        </Button>
      </Form>
    </div>
  );
};

export default Login;
