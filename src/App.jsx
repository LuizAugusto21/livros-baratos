import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Logo from './components/Logo/Logo'
import Login from './pages/login/Login'
import Cadastro from './pages/singup/Cadastro'

export default props => (
  <Router>
    <div className='app'>
      <div className='content'>
        <Logo />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </div>
  </Router>
);

