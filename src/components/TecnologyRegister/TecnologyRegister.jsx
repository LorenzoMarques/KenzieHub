import { useState } from "react";
import { Button } from "../styledButton/StyledButton";
import { Header, Card } from "./TecStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

const TecnologyRegister = ({ setRegister, setTechs }) => {
  const [title, setTitle] = useState("");
  const [dif, setDif] = useState("");
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  const techSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techSchema),
  });

  const submit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        api.get(`/users/${user.id}`).then((res) => setTechs(res.data.techs));
        setRegister(false);
      });
  };

  return (
    <Card>
      <Header>
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <Button onClick={() => setRegister(false)}>X</Button>
        </div>
      </Header>
      <form onSubmit={handleSubmit(submit)}>
        <p>Nome</p>
        <input
          type="text"
          {...register("title")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex:TypeScript"
        />
        <p>Selecionar status</p>
        <select
          name="
            "
          {...register("status")}
          value={dif}
          onChange={(e) => setDif(e.target.value)}
          id=""
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <Button backgroundColor="#ff577f">Cadastrar Tecnologia</Button>
      </form>
    </Card>
  );
};

export default TecnologyRegister;
