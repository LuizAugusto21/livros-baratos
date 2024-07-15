import React, { useState, useEffect } from "react";
import styles from "./TransationCartItem.module.scss";
import bookCover from "../../images/default-placeholder.png";

export default function TransationCartItem({ book_cover = bookCover, name, author, price, status }) {
    const listaStorage = localStorage.getItem("OnCart");
    const [itemsOnCart, setItemsOnCart] = useState(listaStorage ? JSON.parse(listaStorage) : []);

    useEffect(() => {
        localStorage.setItem("OnCart", JSON.stringify(itemsOnCart));
    }, [itemsOnCart]);

    return (
        <div className={styles["item-carrinho"]}>
            <div className={styles["capa-livro"]}>
                <img className={styles["capa-livro-image"]} alt="capa do livro" src={book_cover} width={70} height={85} />
            </div>
            <div className={styles["detalhes-livro"]}>
                <div className={styles["titulo-livro"]}>
                    {name}
                    <div className={styles["autor-livro"]}>{author}</div>
                </div>
                <div className={styles["preco-e-status"]}>
                    <span className={styles["preco-text"]}>R$ {price}</span>
                    <div className={`${styles["status-tag"]} ${getStatusClassName(status)}`}>{status}</div>
                </div>
            </div>
        </div>
    );
}

function getStatusClassName(status) {
    switch (status) {
        case 'FINALIZADO':
            return styles.finalizado;
        case 'CANCELADO':
            return styles.cancelado;
        case 'EM ANDAMENTO':
            return styles.emAndamento;
        default:
            return '';
    }
}
