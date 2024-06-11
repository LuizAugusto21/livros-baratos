import React from "react";
import styles from "./BookCardAlternative.module.scss";
import { Link, useNavigate } from "react-router-dom";
import bookCover from "../../images/default-placeholder.png";


export default function BookCardAlternative( {preco, nomeLivro, Autor}) {
  
  const navigate = useNavigate();
  
  return (
    <div className={styles["BookCardAlternative-box"]}>
        <div className={styles["BookCardAlternative-content"]}>
            <img src={bookCover} alt="capa do livro" height={140} width={97.5} onClick={() => navigate("/detalhes")} />
            <div className={styles["BookCardAlternative-info"]}>
                <p>
                    <div className={styles["price-condition"]}>
                        <div className={styles["price"]}>R${preco}</div>
                        <div className={styles["condition"]}></div>
                    </div>
                    <div className={styles["nome-livro"]}>
                        {nomeLivro}
                    </div>
                </p>
            </div>
        </div>
    </div>
);

}
