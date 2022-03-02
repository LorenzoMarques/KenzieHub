import Login from "../components/Pages/Login/Login";
import { Route, Switch } from "react-router-dom";
import Register from "../components/Pages/Register/Register";
import Tecnology from "../components/Pages/Tecnology/Tecnology";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/technologies">
          <Tecnology auth={auth} setAuth={setAuth} />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
