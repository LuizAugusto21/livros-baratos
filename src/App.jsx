import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Cadastro from "./pages/singup/Cadastro";
import homepage from "./pages/homepage/homepage";

function App(props) {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/" component={homepage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
