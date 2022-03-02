import { HeaderTec, OpacityDiv, TecContainer } from "./TecContainer";
import { Nav } from "./TecContainer";
import Logo from "../../imagens/Logo.png";
import { Button } from "../../styledButton/StyledButton";
import { GreyDiv } from "./TecContainer";
import { Tec } from "./TecContainer";
import TecnologyRegister from "../../TecnologyRegister/TecnologyRegister";
import { useState } from "react";
import TecnologyUpdate from "../../TencologyUpdate/TecnologyUpdate";
import { useEffect } from "react";
import att from "../../../services/att";

const Tecnology = ({ auth, setAuth }) => {
  const [register, setRegister] = useState(false);
  const [update, setUpdate] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const [techs, setTechs] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  console.log(auth);

  const returnToMainPage = () => {
    localStorage.clear();
    setAuth(false);
    window.location.href = "/";
  };

  useEffect(() => {
    if (auth) {
      att(user, setTechs);
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <OpacityDiv opacity={register || update ? "50%" : "100%"}>
        <Nav>
          <img src={Logo} alt="" />
          <Button
            backgroundColor="#212529"
            borderColor="#212529"
            onClick={returnToMainPage}
          >
            Sair
          </Button>
        </Nav>
        <GreyDiv></GreyDiv>
        <HeaderTec>
          <h2>Olá, {user && user.name}</h2>
          <span>{user && user.course_module}</span>
        </HeaderTec>
        <GreyDiv></GreyDiv>
        <Tec>
          <h3>Tecnologias</h3>
          <Button
            backgroundColor="#212529"
            borderColor="#212529"
            onClick={() => setRegister(true)}
          >
            +
          </Button>
        </Tec>
        <TecContainer>
          {techs.map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => {
                  setUpdate(true);
                  setId(element.id);
                  setTitle(element.title);
                }}
              >
                <h3>{element.title}</h3>
                <span>{element.status}</span>
              </div>
            );
          })}
        </TecContainer>
      </OpacityDiv>
      {register === true && (
        <TecnologyRegister
          techs={techs}
          setTechs={setTechs}
          setRegister={setRegister}
        />
      )}
      {update === true && (
        <TecnologyUpdate
          techs={techs}
          setTechs={setTechs}
          setUpdate={setUpdate}
          id={id}
          setUptade={setUpdate}
          name={title}
        />
      )}
    </>
  );
};

export default Tecnology;
