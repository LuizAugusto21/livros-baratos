import React from "react";
import BookCardAlternative from "../../components/BookCardAlternative/BookCardAlternative";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileVendas.module.css";
import profilePic from "../../images/default_profilePic.jpg";
import TransationCartItem from "../../components/TransationCartItem/TransationCartItem";

export default function ProfileVendas() {
    const navigate = useNavigate();

    return (
        <div className={styles["container-principal"]}>
            <div className={styles["container-navegavel"]}>
                <div className={styles["container-paginas-botoes"]}>
                    <div className={styles["paginas"]}>
                        <div className={styles["foto-e-nome"]}>
                            <img className={styles["foto"]} src={profilePic} alt="Profile" />
                            <div className={styles["nome"]}>Fulano de Tal</div>
                        </div>
                        <div className={styles["atalhos"]}>
                            <div className={styles["home"]} onClick={() => navigate("/profileHome")}>
                                <img src='/home-icon.PNG' alt="home" className={styles.icons} /> Home
                            </div>
                            <div className={styles["editar"]} onClick={() => navigate("/profileEdit")}>
                                <img src='/edit-icon.PNG' alt="editar" className={styles.icons} /> Editar Perfil
                            </div>
                            <div className={styles["vendas"]}>
                                <img src='/vendas-icon.PNG' alt="vendas" className={styles.icons} /> Vendas
                            </div>
                            <div className={styles["compras"]} onClick={() => navigate("/profileCompras")}>
                                <img src='/carrinho-icon.PNG' alt="compras" className={styles.icons} /> Compras
                            </div>
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
            <div className={styles["container-conteudo"]}>
                <div className={styles["titulo-e-botao"]}>
                    <div className={styles["titulo"]}>Suas vendas</div>
                    <div className={styles["botao"]}>
                        <button className={styles["botao-cadastrar"]}>Cadastrar livro</button>
                    </div>
                </div>
                <div className={styles["lista-livros"]}>
                <div className={styles["bloco-lista-itens"]}>

                    <TransationCartItem 
                        key={1}
                        name={'Jogos Vorazes'}
                        author={'Suzanne Collins'}
                        price={45.00}
                        status={'EM ANDAMENTO'}
                    />

                    <TransationCartItem 
                        key={2}
                        name={'Jogos Vorazes: Em chamas'}
                        author={'Suzanne Collins'}
                        price={50.00}
                        status={'FINALIZADO'}
                    />

                    <TransationCartItem 
                        key={3}
                        name={'Jogos Vorazes: A esperança'}
                        author={'Suzanne Collins'}
                        price={55.00}
                        status={'CANCELADO'}
                    />

                    </div>
                </div>
            </div>
        </div>
    );
}
