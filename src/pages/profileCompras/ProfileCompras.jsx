import React from "react";
import BookCardAlternative from "../../components/BookCardAlternative/BookCardAlternative";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileCompras.module.css";
import profilePic from "../../images/default_profilePic.jpg";
import TransationCartItem from "../../components/TransationCartItem/TransationCartItem";

export default function ProfileCompras() {
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
                            <div className={styles["vendas"]} onClick={() => navigate("/profileVendas")}>
                                <img src='/vendas-icon.PNG' alt="vendas" className={styles.icons} /> Vendas
                            </div>
                            <div className={styles["compras"]}>
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
                    <div className={styles["titulo"]}>Suas compras</div>
                </div>
                <div className={styles["lista-livros"]}>
                <TransationCartItem 
                        key={1}
                        name={'Duna: Livro 1'}
                        author={'Frank Herbert'}
                        price={77.65}
                        status={'EM ANDAMENTO'}
                    /> 

                    <TransationCartItem 
                        key={2}
                        name={'Duna: Livro 2'}
                        author={'Frank Herbert'}
                        price={83.50}
                        status={'FINALIZADO'}
                    />
                </div>
            </div>
        </div>
    );
}
