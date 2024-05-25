import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';

export default props => (
    <React.Fragment>
        <main className="content">
            <div className="container">
                <div className="cadastro">
                <div className="input-container">
                        <label>Qual o tipo da conta?</label>
                        <div className="radio-buttons">
                            <input type="radio" id="leitor" name="tipo-conta" value="leitor" className="input-field" />
                            <label htmlFor="leitor">Leitor</label>

                            <input type="radio" id="sebo" name="tipo-conta" value="sebo" className="input-field" />
                            <label htmlFor="sebo">Sebo</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="nome">Nome</label> 
                        <input type="text" id="nome" className="input-field" /> 
                    </div>
                    <div className="input-container">
                        <label htmlFor="endereco">Endereço</label> 
                        <input type="text" id="endereco" className="input-field" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="contato">Contato</label> 
                        <input type="text" id="contato" className="input-field" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label> 
                        <input type="email" id="email" className="input-field" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="senha">Senha</label> 
                        <input type="password" id="senha" className="input-field" />
                    </div>

                    <div className="login-buttons">
                        <button onClick={Cadastrar}>CADASTRAR</button>
                    </div>

                    <div className="login-link">
                        <p>Já possui uma conta? <Link to="/login" className="login-link">Login</Link></p>
                    </div>
                </div>
            </div>  
        </main>
    </React.Fragment>
);

function Cadastrar() {
    // Implementação da função Cadastrar
}
