import api from "./api";

const att = (user, setTechs) => {
  api.get(`/users/${user.id}`).then((res) => setTechs(res.data.techs));
};

export default att;
