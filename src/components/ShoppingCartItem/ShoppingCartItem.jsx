import React from "react";
import styles from "./ShoppingCartItem.module.scss";
import trashIcon from "../../images/trash-icon.png";
import bookCover from "../../images/Harry-Potter-1.jpg";

// TODO: Será a função de remover o item do carrinho
function removerItem(){ /* Implementar lógica */}

export default function ShoppingCartItem({book_cover=bookCover, name, author, price}){
    return (
        <div>
            <div className={styles["item-carrinho"]}>
                <div className={styles["capa-livro"]}>
                    <img className={styles["capa-livro-image"]} alt="capa do livro" src={book_cover} width={70} height={85} />
                </div>
                <div className={styles["titulo-livro"]}>{name}
                    <div className={styles["autor-livro"]}>{author}</div>
                </div>
                <div className={styles["preco-e-remover"]}>
                    <span className={styles["preco-text"]}>R$ {price}</span>
                    <img 
                        id="trash-icon" 
                        className={styles["trash-icon"]} 
                        alt="icone de lixeira" 
                        src={trashIcon} 
                        onClick={() => { removerItem() }} 
                    />
                </div>
            </div>
        </div>
    );
    
}