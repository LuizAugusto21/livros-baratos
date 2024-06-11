import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import styles from './Cadastro.module.css';

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
                <main className={styles["content"]}>
                    <div className={styles["container"]}>
                        <Logo />
                        <div className={styles["cadastro"]}>
                            {Object.keys(errors).length > 0 && (
                                <div className={styles["error-message"]}>* Campo obrigatório não informado.</div>
                            )}
                            <div className={styles["input-container"]}>
                                <label>Qual o tipo da conta? <span className={styles["required"]}>*</span></label>
                                <div className={styles["radio-buttons"]}>
                                    <input
                                        type="radio"
                                        id="leitor"
                                        name="tipo"
                                        value="leitor"
                                        className={`${styles["input-field"]} ${errors.tipo ? styles["input-error"] : ''}`}
                                        onChange={this.updateField}
                                    />
                                    <label htmlFor="leitor">Leitor</label>
        
                                    <input
                                        type="radio"
                                        id="sebo"
                                        name="tipo"
                                        value="sebo"
                                        className={`${styles["input-field"]} ${errors.tipo ? styles["input-error"] : ''}`}
                                        onChange={this.updateField}
                                    />
                                    <label htmlFor="sebo">Sebo</label>
                                </div>
                            </div>
                            <div className={styles["input-container"]}>
                                <label htmlFor="nome">Nome <span className={styles["required"]}>*</span></label>
                                <input
                                    type="text"
                                    id="nome"
                                    className={`${styles["input-field"]} ${errors.nome ? styles["input-error"] : ''}`}
                                    name="nome"
                                    value={this.state.user.nome}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className={styles["input-container"]}>
                                <label htmlFor="endereco">Endereço <span className={styles["required"]}>*</span></label>
                                <input
                                    type="text"
                                    id="endereco"
                                    className={`${styles["input-field"]} ${errors.endereco ? styles["input-error"] : ''}`}
                                    name="endereco"
                                    value={this.state.user.endereco}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className={styles["input-container"]}>
                                <label htmlFor="contato">Contato <span className={styles["required"]}>*</span></label>
                                <input
                                    type="text"
                                    id="contato"
                                    className={`${styles["input-field"]} ${errors.contato ? styles["input-error"] : ''}`}
                                    name="contato"
                                    value={this.state.user.contato}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className={styles["input-container"]}>
                                <label htmlFor="email">Email <span className={styles["required"]}>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`${styles["input-field"]} ${errors.email ? styles["input-error"] : ''}`}
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className={styles["input-container"]}>
                                <label htmlFor="login">Login <span className={styles["required"]}>*</span></label>
                                <input
                                    type="text"
                                    id="login"
                                    className={`${styles["input-field"]} ${errors.login ? styles["input-error"] : ''}`}
                                    name="login"
                                    value={this.state.user.login}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className={styles["input-container"]}>
                                <label htmlFor="senha">Senha <span className={styles["required"]}>*</span></label>
                                <input
                                    type="password"
                                    id="senha"
                                    className={`${styles["input-field"]} ${errors.senha ? styles["input-error"] : ''}`}
                                    name="senha"
                                    value={this.state.user.senha}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className={styles["login-buttons"]}>
                                <button onClick={this.save}>CADASTRAR</button>
                            </div>
                            <div className={styles["login-link"]}>
                                <p>Já possui uma conta? <Link to="/login" className={styles["login-link"]}>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
        
    }
}
