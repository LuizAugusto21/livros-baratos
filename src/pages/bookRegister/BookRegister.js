import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookRegister.module.scss";
import profilePic from "../../images/default_profilePic.jpg";

export default function BookDetails(){
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
                <div className={styles["form"]}>
                    <h1 className={styles["cadastro-titulo"]}>Cadastro de livro</h1>
                        <h3>Titulo</h3>
                        <input id="titulo" className={styles["titulo"]}/>
                        <h3>Autor</h3>
                        <input id="autor" className={styles["autor"]}/>            
                        <div className={styles["tipo-ano-preco"]}>
                        <div>
                            <h3>Tipo</h3>
                                <input list="tipos" id="tipo" className={styles["tipo"]}/>
                                <datalist id="tipos">
                                    <option value={"Novo"}></option>
                                    <option value={"Seminovo"}></option>
                                    <option value={"Usado"}></option>
                                </datalist>
                        </div>
                        <div>
                            <h3>Ano</h3>
                            <input id="ano" type="number" className={styles["ano"]}/>
                        </div>
                        <div>
                            <h3>Preço</h3>                            
                            <input id="preco" type="number" className={styles["preco"]}/>   
                        </div>
                        </div>
                        
                        <h3>Descrição</h3>
                        <input id="descricao" className={styles["descricao"]}/>
                </div>
                <div className={styles["box-botao"]}>
                    <button className={styles["botao-cadastrar"] }>Cadastrar</button>
                </div>
                
            </div>
        </div>
    );
}