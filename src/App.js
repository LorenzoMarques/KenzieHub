import GlobalStyle from "./styleGlobal";
import "./style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
