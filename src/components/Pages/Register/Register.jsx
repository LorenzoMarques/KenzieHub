import Logo from "../../imagens/Logo.png";
import { ContainerRegister } from "./style";
import { Img } from "../../StyledImg/StyledImg";
import { Button } from "../../styledButton/StyledButton";
import { Header } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const mainPage = () => {
    history.push("/");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [module, setModule] = useState("");
  const [contact, setContact] = useState("");
  const [bio, setBio] = useState("");

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Minimo de 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .matches(password, "Senhas diferentes")
      .length(password.length, "Senhas diferentes"),
    module: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const transform = (email, password, name, bio, contact, course_module) => {
    const result = {
      email: email,
      password: password,
      name: name,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    return result;
  };

  const submit = (e) => {
    axios
      .post(
        "https://kenziehub.herokuapp.com/users",
        transform(email, password, name, bio, contact, module)
      )
      .then(() => {
        toast.success("Conta criada com sucesso");
        mainPage();
      })
      .catch(() => {
        toast.error("Não foi possivel criar essa conta");
      });
  };

  return (
    <div>
      <Header>
        <Img src={Logo} />
        <Button backgroundColor="#212529" onClick={mainPage}>
          Voltar
        </Button>
      </Header>
      <ContainerRegister>
        <h3>Crie sua Conta</h3>
        <span>Rapido e grátis, vamos nessa</span>
        <form action="" onSubmit={handleSubmit(submit)}>
          <p>Nome</p>
          <input
            type="text"
            {...register("name")}
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
          <p>Email</p>
          <input
            type="text"
            {...register("email")}
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}

          <p>Senha</p>
          <input
            type="password"
            {...register("password")}
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}

          <p>Confirmar Senha</p>
          <input
            type="password"
            {...register("passwordConfirm")}
            placeholder="Confirme sua senha"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          {errors.passwordConfirm && (
            <span className="error">{errors.passwordConfirm.message}</span>
          )}

          <p>Contato</p>
          <input
            type="text"
            {...register("contact")}
            placeholder="Digite seu contato"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {errors.contact && (
            <span className="error">{errors.contact.message}</span>
          )}

          <p>Bio</p>
          <input
            type="text"
            {...register("bio")}
            placeholder="Escreva sua bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          {errors.bio && <span className="error">{errors.bio.message}</span>}

          <p>Selecione um módulo</p>
          <select
            {...register("module")}
            value={module}
            onChange={(e) => setModule(e.target.value)}
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          {errors.modue && (
            <span className="error">{errors.modue.message}</span>
          )}

          <Button
            backgroundColor="#59323F
            ;"
            borderColor="#59323F
            ;
 "
          >
            Cadastrar
          </Button>
        </form>
      </ContainerRegister>
    </div>
  );
};

export default Register;
