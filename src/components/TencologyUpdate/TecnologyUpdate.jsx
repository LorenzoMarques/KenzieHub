import { Button } from "../styledButton/StyledButton";
import { Header, Card } from "../TecnologyRegister/TecStyle";
import api from "../../services";
import { useState } from "react";

const TecnologyUpdate = ({ setUpdate, setTechs, techs, id }) => {
  const [token] = useState(JSON.parse(localStorage.getItem("token")));

  const remove = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setTechs(techs.filter((element) => element.id !== id));
        setUpdate(false);
      });
  };

  return (
    <Card>
      <Header>
        <div>
          <h3>Tecnologia Detalhes</h3>
          <Button onClick={() => setUpdate(false)}>X</Button>
        </div>
      </Header>
      <form>
        <p>Nome do projeto</p>
        <input type="text" />
        <p>Selecionar status</p>
        <select
          name="
            "
          id=""
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div>
          <Button backgroundColor="#ff577f" className="button1" type="button">
            Salvar alterações
          </Button>
          <Button
            type="button"
            backgroundColor="##868E96"
            className="button2"
            onClick={() => remove(id)}
          >
            Excluir
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TecnologyUpdate;
