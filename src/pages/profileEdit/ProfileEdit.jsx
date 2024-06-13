// ProfileEdit.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from "./ProfileEdit.module.css";
import profilePic from "../../images/default_profilePic.jpg";

export default function ProfileEdit({ userId }) {
    const navigate = useNavigate();

    // Estado para armazenar os dados do usuário
    const [userData, setUserData] = useState({
        id: userId,
        tipo: '',
        nome: '',
        endereco: '',
        contato: '',
        email: '',
        login: '',
        senha: ''
    });

    useEffect(() => {
        // Simulação de dados do usuário logado
        const loggedInUser = {
            id: 1,
            tipo: 'Cliente',
            nome: 'Fulano de Tal',
            endereco: 'Rua A, 123',
            contato: '(99) 99999-9999',
            email: 'fulano@example.com',
            login: 'fulano123',
            senha: '********'
        };
        setUserData(loggedInUser); // Atualiza o estado com os dados do usuário logado
    }, []);

    // Função para lidar com a mudança nos campos do formulário
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implementar lógica para enviar os dados atualizados para o backend
        axios.put(`http://localhost:3001/users/${userId}`, userData)
            .then(response => {
                console.log('Dados atualizados com sucesso:', response.data);
                navigate("/profileHome"); // Redireciona para a página inicial do perfil após a alteração
            })
            .catch(error => {
                console.error('Erro ao atualizar dados do usuário:', error);
            });
    };

    // Função para cancelar a edição
    const handleCancel = () => {
        navigate("/profileHome"); // Redireciona para a página inicial do perfil
    };

    return (
        <div className={styles["container-principal"]}>
            <div className={styles["container-navegavel"]}>
                <div className={styles["container-paginas-botoes"]}>
                    <div className={styles["paginas"]}>
                        <div className={styles["foto-e-nome"]}>
                            <img className={styles["foto"]} src={profilePic} alt="Profile" />
                            <div className={styles["nome"]}>{userData.nome}</div>
                        </div>
                        <div className={styles["atalhos"]}>
                            <div className={styles["home"]} onClick={() => navigate("/profileHome")}>
                                <img src='/home-icon.PNG' alt="home" className={styles.icons} /> Home
                            </div>
                            <div className={styles["editar"]} onClick={() => navigate("/profileEdit")}>
                                <img src='/edit-icon.PNG' alt="editar" className={styles.icons} /> Editar Perfil
                            </div>
                            <div className={styles["vendas"]} onClick={() => navigate("/profileVendas")}>
                                <img src='/vendas-icon.PNG' alt="vendas" className={styles.icons} /> Vendas
                            </div>
                            <div className={styles["compras"]} onClick={() => navigate("/profileCompras")}>
                                <img src='/carrinho-icon.PNG' alt="compras" className={styles.icons} /> Compras
                            </div>
                        </div>
                        <div className={styles["botoes"]}>
                            <div className={styles["sair"]}>
                                <img src='/ExitIcon.svg' alt="home" className={styles.icons}/> Sair 
                            </div>
                            <div className={styles["voltar"]} onClick={() => navigate("/")}>
                                <img src='/icon-voltar.PNG' alt="home" className={styles.icons}/> Voltar 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["container-conteudo"]}>
                <div className={styles["titulo-e-botao"]}>
                    <div className={styles["titulo"]}>Editar Perfil</div>
                </div>
                <form className={styles["form"]} onSubmit={handleSubmit}>
                    <div className={styles["input-container"]}>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={userData.nome}
                            onChange={handleInputChange}
                            className={styles["input-field"]}
                            placeholder="Nome atual"
                        />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            value={userData.endereco}
                            onChange={handleInputChange}
                            className={styles["input-field"]}
                            placeholder="Endereço atual"
                        />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="contato">Contato:</label>
                        <input
                            type="text"
                            id="contato"
                            name="contato"
                            value={userData.contato}
                            onChange={handleInputChange}
                            className={styles["input-field"]}
                            placeholder="Contato atual"
                        />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className={styles["input-field"]}
                            placeholder="Email atual"
                        />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="login">Login:</label>
                        <input
                            type="text"
                            id="login"
                            name="login"
                            value={userData.login}
                            onChange={handleInputChange}
                            className={styles["input-field"]}
                            placeholder="Login atual"
                        />
                    </div>
                    <div className={styles["input-container"]}>
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={userData.senha}
                            onChange={handleInputChange}
                            className={styles["input-field"]}
                            placeholder="********"
                        />
                    </div>
                    <div className={styles["buttons-container"]}>
                        <button type="submit" className={styles["save-button"]}>Salvar Alterações</button>
                        <button type="button" onClick={handleCancel} className={styles["cancel-button"]}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
