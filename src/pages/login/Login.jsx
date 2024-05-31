import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {
    const entrarLogin = () => {
        // Implementação da função entrarLogin
    };

    return (
        <>
            <main className="content">
                <div className="container">
                    <div className="login">
                        <div className="input-container">
                            <label htmlFor="usuario">LOGIN</label> 
                            <input type="text" id="usuario" className="input-field" /> 
                        </div>
                        <div className="input-container">
                            <label htmlFor="senha">SENHA</label> 
                            <input type="password" id="senha" className="input-field" />
                        </div>
                        <div className="input-container-lembrar-frgt">
                            <div className="remember-me">
                                <input type="checkbox" id="lembrar" />
                                <label htmlFor="lembrar">Lembre-se de mim</label>
                            </div>
                            <a href="https://www.metropoledigital.ufrn.br/portal/" target="_blank" rel="noopener noreferrer">Esqueci minha senha</a> 
                        </div>

                        <div className="login-buttons"> <br />
                            <button onClick={entrarLogin}>ENTRAR</button>
                        </div>

                        <div className="signup-container">
                            <h5>Ainda não possui uma conta?</h5>
                            <Link to="/cadastro" className="signup-link">Cadastre-se</Link> 
                        </div>
                    </div>
                </div>  
            </main>
        </>
    );
}

export default Login;
