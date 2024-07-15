import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { useAuth } from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({ login: '', senha: '' });
  const location = useLocation();
  const navigate = useNavigate();
  const { login, errorMessage, setErrorMessage } = useAuth();
  const successMessage = location.state?.successMessage;

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, setErrorMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(formData.login, formData.senha);
    if (user) {
      const from = location.state?.from?.pathname || "/";
      navigate(from);
    }
  };

  return (
    <React.Fragment>
      <main className="content-login">
        <div className="container-login">
          <Logo />
          <div className="login">
            {successMessage && <div className="success-message-login">{successMessage}</div>}
            {errorMessage && <div className="error-message-login" style={{ color: 'red' }}>{errorMessage}</div>}
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
