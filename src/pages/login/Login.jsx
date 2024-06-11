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
      <main className="content-login">
        <div className="container-login">
          <Logo />
          <div className="login">
            {errorMessage && <div className="error-message-login">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="input-container-login">
                <label htmlFor="login">LOGIN</label>
                <input
                  type="text"
                  id="login"
                  className="input-field-login"
                  name="login"
                  value={formData.login}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container-login">
                <label htmlFor="senha">SENHA</label>
                <input
                  type="password"
                  id="senha"
                  className="input-field-login"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container-lembrar-frgt">
                        <div className="remember-me">
                            <input type="checkbox" id="lembrar" />
                            <label htmlFor="lembrar">Lembre-se de mim</label>
                        </div>
                        <a href="https://www.metropoledigital.ufrn.br/portal/" target="_blank" rel="noopener noreferrer">Esqueci minha senha</a> 
                    </div>
              <div className="login-buttons">
                <br />
                <button type="submit">ENTRAR</button>
              </div>
            </form>
            <div className="signup-container-login">
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
