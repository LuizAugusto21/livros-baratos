import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import axios from 'axios';
import styles from './Login.module.css';

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
        sessionStorage.setItem("isLogged", JSON.stringify(true));
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
      <main className={styles["content"]}>
        <div className={styles["container"]}>
          <Logo />
          <div className={styles["login"]}>
            {errorMessage && <div className={styles["error-message"]}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className={styles["input-container"]}>
                <label htmlFor="login">LOGIN</label>
                <input
                  type="text"
                  id="login"
                  className={styles["input-field"]}
                  name="login"
                  value={formData.login}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["input-container"]}>
                <label htmlFor="senha">SENHA</label>
                <input
                  type="password"
                  id="senha"
                  className={styles["input-field"]}
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["login-buttons"]}>
                <br />
                <button type="submit">ENTRAR</button>
              </div>
            </form>
            <div className={styles["signup-container"]}>
              <h5>Ainda não possui uma conta?</h5>
              <Link to="/cadastro" className={styles["signup-link"]}>Cadastre-se</Link>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );

};

export default Login;
