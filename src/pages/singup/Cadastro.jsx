import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import withRouter from '../../utils/withRouter';
import './Cadastro.css';

const baseUrl = 'http://localhost:8080/usuario';
const initialState = {
    user: { tipoUsuario: '', nome: '', endereco: '', contato: '', email: '', login: '', senha: '' },
    errors: {},
    apiError: ''
};

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };

        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    componentDidMount() {
        this.clear();
    }

    clear() {
        this.setState({ user: { ...initialState.user }, errors: {}, apiError: '' });
    }

    validate() {
        const { user } = this.state;
        const errors = {};

        if (!user.tipoUsuario) errors.tipoUsuario = 'Campo obrigatório não informado.';
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

        const { user } = this.state;
        axios.post(`${baseUrl}`, user)
            .then(resp => {
                this.clear();
                this.props.navigate('/login', { state: { successMessage: 'Cadastro realizado com sucesso.' } });
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    this.setState({ apiError: error.response.data });
                } else {
                    this.setState({ apiError: 'Erro desconhecido ao cadastrar usuário.' });
                }
            });
    }

    updateField(event) {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    render() {
        const { errors, user, apiError } = this.state;

        return (
            <React.Fragment>
                <main className="content-cadastro">
                    <div className="container-cadastro">
                        <Logo />
                        <div className="cadastro">
                            {Object.keys(errors).length > 0 && (
                                <div className="error-message-cadastro">* Campo obrigatório não informado.</div>
                            )}
                            {apiError && (
                                <div className="api-error-message-cadastro">{apiError}</div>
                            )}
                            <div className="input-container-cadastro">
                                <label>Qual o tipo da conta? <span className="required">*</span></label>
                                <div className="radio-buttons-cadastro">
                                    <input
                                        type="radio"
                                        id="leitor"
                                        name="tipoUsuario"
                                        value="0"
                                        className={`input-field-cadastro ${errors.tipoUsuario ? 'input-error' : ''}`}
                                        checked={user.tipoUsuario === '0'}
                                        onChange={this.updateField}
                                    />
                                    <label htmlFor="leitor">Leitor</label>

                                    <input
                                        type="radio"
                                        id="sebo"
                                        name="tipoUsuario"
                                        value="1"
                                        className={`input-field-cadastro ${errors.tipoUsuario ? 'input-error' : ''}`}
                                        checked={user.tipoUsuario === '1'}
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
                                    value={user.nome}
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
                                    value={user.endereco}
                                    onChange={this.updateField}
                                />
                            </div>
                            <div className="input-container-cadastro">
                                <label htmlFor="contato">Contato <span className="required-cadastro">*</span></label>
                                <input
                                    type="text"
                                    id="contato"
                                    className={`input-field-cadastro ${errors.contato ? 'input-error-cadastro' : ''}`}
                                    name="contato"
                                    value={user.contato}
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
                                    value={user.email}
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
                                    value={user.login}
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
                                    value={user.senha}
                                    onChange={this.updateField}
                                />
                            </div>
                            <button className="btn-cadastro" onClick={this.save}>Cadastrar</button>
                            <p>Já tem conta? <Link to="/login" className="login-link">Entre</Link></p>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default withRouter(Cadastro);
