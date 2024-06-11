import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './Cadastro.css';

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { tipo: '', nome: '', endereco: '', contato: '', email: '', login: '', senha: '' },
    list: [],
    errors: {}
};

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };

        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    clear() {
        this.setState({ user: initialState.user, errors: {} });
    }

    validate() {
        const errors = {};
        const { user } = this.state;

        if (!user.tipo) errors.tipo = 'Campo obrigatório não informado.';
        if (!user.nome) errors.nome = 'Campo obrigatório não informado.';
        if (!user.endereco) errors.endereco = 'Campo obrigatório não informado.';
        if (!user.contato) errors.contato = 'Campo obrigatório não informado.';
        if (!user.email) errors.email = 'Campo obrigatório não informado.';
        if (!user.senha) errors.senha = 'Campo obrigatório não informado.';
        if (!user.login) errors.login = 'Campo obrigatório não informado.';

        return errors;
    }

    save() {
        const errors = this.validate();
        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
            return;
        }

        const user = this.state.user;
        const method = 'post';
        const url = baseUrl;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: initialState.user, list, errors: {} });
            });
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    render() {
        const { errors } = this.state;

        return (
            <React.Fragment>
                <main className="content-cadastro">
                    <div className="container-cadastro">
                        <Logo />
                        <div className="cadastro">
                            {Object.keys(errors).length > 0 && (
                                <div className="error-message-cadastro">* Campo obrigatório não informado.</div>
                            )}
                            <div className="input-container-cadastro">
                                <label>Qual o tipo da conta? <span className="required">*</span></label>
                                <div className="radio-buttons-cadastro">
                                    <input
                                        type="radio"
                                        id="leitor"
                                        name="tipo"
                                        value="leitor"
                                        className={`input-field-cadastro ${errors.tipo ? 'input-error' : ''}`}
                                        onChange={this.updateField}
                                    />
                                    <label htmlFor="leitor">Leitor</label>

                                    <input
                                        type="radio"
                                        id="sebo"
                                        name="tipo"
                                        value="sebo"
                                        className={`input-field-cadastro ${errors.tipo ? 'input-error' : ''}`}
                                        onChange={this.updateField}
                                    />
                                    <label htmlFor="sebo">Sebo</label>
                                </div>
                            </div>
                            <div className="input-container-cadastro">
                                <label htmlFor="nome">Nome <span className="required-cadastro">*</span></label>
                                <input
                                    type="text"
                                    id="nome"
                                    className={`input-field-cadastro ${errors.nome ? 'input-error-cadastro' : ''}`}
                                    name="nome"
                                    value={this.state.user.nome}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className="input-container-cadastro">
                                <label htmlFor="endereco">Endereço <span className="required-cadastro">*</span></label>
                                <input
                                    type="text"
                                    id="endereco"
                                    className={`input-field-cadastro ${errors.endereco ? 'input-error-cadastro' : ''}`}
                                    name="endereco"
                                    value={this.state.user.endereco}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className="input-container-cadastro">
                                <label htmlFor="contato">Contato <span className="required">*</span></label>
                                <input
                                    type="text"
                                    id="contato"
                                    className={`input-field-cadastro ${errors.contato ? 'input-error-cadastro' : ''}`}
                                    name="contato"
                                    value={this.state.user.contato}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className="input-container-cadastro">
                                <label htmlFor="email">Email <span className="required-cadastro">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`input-field-cadastro ${errors.email ? 'input-error-cadastro' : ''}`}
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className="input-container-cadastro">
                                <label htmlFor="login">Login <span className="required-cadastro">*</span></label>
                                <input
                                    type="text"
                                    id="login"
                                    className={`input-field-cadastro ${errors.login ? 'input-error-cadastro' : ''}`}
                                    name="login"
                                    value={this.state.user.login}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className="input-container-cadastro">
                                <label htmlFor="senha">Senha <span className="required-cadastro">*</span></label>
                                <input
                                    type="password"
                                    id="senha"
                                    className={`input-field-cadastro ${errors.senha ? 'input-error-cadastro' : ''}`}
                                    name="senha"
                                    value={this.state.user.senha}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className="login-buttons-cadastro">
                                <button onClick={this.save}>CADASTRAR</button>
                            </div>
                            <div className="login-link-cadastro">
                                <p>Já possui uma conta? <Link to="/login" className="login-link-cadastro">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
