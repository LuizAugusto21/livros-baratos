import React from "react";
import BookCardAlternative from "../../components/BookCardAlternative/BookCardAlternative"
import { useNavigate } from "react-router-dom";
import styles from "./ProfileHome.module.css";
import profilePic from "../../images/default_profilePic.jpg";



export default function ProfileHome(){
    const navigate = useNavigate();

    return(
        <div className={styles["container-principal"]}>
            <div className={styles["container-navegavel"]}>
                <div className={styles["container-paginas-botoes"]}>
                    <div className={styles["paginas"]}>
                        <div className={styles["foto-e-nome"]}>
                            <img className={styles["foto"]} src={profilePic} />
                            <div className={styles["nome"]}>Fulano de Tal</div>
                        </div>
                        <div className={styles["home"]}>Home</div>
                        <div className={styles["editar"]}>Editar Perfil</div>
                        <div className={styles["vendas"]}>Vendas</div>
                        <div className={styles["compras"]}>Compras</div>
                    </div>
                    <div className={styles["botoes"]}>
                        <div className={styles["sair"]}> Sair </div>
                        <div className={styles["voltar"] } onClick={() => navigate("/")}> Voltar </div>

                    </div>
                   
                </div>
            </div>
            <div className={styles["container-conteudo"]}>
                <div className={styles["titulo-e-botao"]}>
                    <div className={styles["titulo"]}>Seus livros à venda</div>
                    <div className={styles["botao"]}>
                        <button className={styles["botao-cadastrar"]}>Cadastrar livro</button>
                    </div>
                </div>
                <div className={styles["lista-livros"]}>
                    <BookCardAlternative preco={15} nomeLivro={"Jogos Vorazes"}
                    Autor={"Suzane Lins"}
                    />
                    <BookCardAlternative preco={15} nomeLivro={"Jogos Vorazes"}
                    Autor={"Suzane CoLins"}
                    />
                    <BookCardAlternative preco={15} nomeLivro={"Jogos Vorazes"}
                    Autor={"Suzane Lins"}
                    />
                    <BookCardAlternative preco={15} nomeLivro={"Jogos Vorazes"}
                    Autor={"Suzane Lins"}
                    />
                    <BookCardAlternative preco={15} nomeLivro={"Jogos Vorazes"}
                    Autor={"Suzane Lins"}
                    />
                </div>
            </div>
        </div>
    );
}