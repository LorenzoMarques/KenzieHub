import { Button } from "../styledButton/StyledButton";
import { Header, Card } from "../TecnologyRegister/TecStyle";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import att from "../../services/att";

const TecnologyUpdate = ({ setUpdate, name, setTechs, techs, id }) => {
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const [title] = useState(name);
  const [status, setStatus] = useState("Iniciante");
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

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

  const update = (id) => {
    api
      .put(
        `/users/techs/${id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success("Alteração feita com sucesso");
        setUpdate(false);
        att(user, setTechs);
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
        <input type="text" value={title} />
        <p>Selecionar status</p>
        <select
          name="
            "
          id=""
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div>
          <Button
            backgroundColor="#ff577f"
            className="button1"
            type="button"
            onClick={() => update(id)}
          >
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
