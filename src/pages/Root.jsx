import Login from "./Login";
import Home from "./Home";
import Cadastro from "./Cadastro";
import RecuperarSenha from "./RecuperarSenha";
import ListarFuncionarios from "../components/ListaFuncionarios";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../routes/Private';


function Routes() {
  return (

  

    <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <RoutesPrivate path="/home" exact component={Home} />
        <RoutesPrivate path="/cadastro" exact component={Cadastro} />
        <Route path="/recuperarSenha" exact component={RecuperarSenha} />
        <Route path="/listarFuncionarios" exact component={ListarFuncionarios} />
      </Switch>
      </StoreProvider>
    </BrowserRouter>
  )
}

export default Routes;