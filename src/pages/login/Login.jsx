import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ login: '', senha: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users');
      const users = response.data;
      const user = users.find(user => user.login === formData.login && user.senha === formData.senha);

      if (user) {
        const { from } = location.state || { from: { pathname: "/" } };
        navigate(from.pathname);
      } else {
        setErrorMessage('Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <React.Fragment>
      <main className="content">
        <div className="container">
          <Logo />
          <div className="login">
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="login">LOGIN</label>
                <input
                  type="text"
                  id="login"
                  className="input-field"
                  name="login"
                  value={formData.login}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="senha">SENHA</label>
                <input
                  type="password"
                  id="senha"
                  className="input-field"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
              </div>
              <div className="login-buttons">
                <br />
                <button type="submit">ENTRAR</button>
              </div>
            </form>
            <div className="signup-container">
              <h5>Ainda não possui uma conta?</h5>
              <Link to="/cadastro" className="signup-link">Cadastre-se</Link>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Login;
