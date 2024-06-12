import React, { useState, useEffect } from "react";
import styles from "./ShoppingCartItem.module.scss";
import trashIcon from "../../images/trash-icon.png";
import bookCover from "../../images/default-placeholder.png";

export default function ShoppingCartItem({book_cover=bookCover, name, author, price}){

    // Carrega a lista de livros no carrinho
    const listaStorage = localStorage.getItem("OnCart");  
    const [itemsOnCart, setItemsOnCart] = useState(listaStorage ? JSON.parse(listaStorage) : []);
 
     // Atualiza a lista de compras a cada mudança
     useEffect(() => {
       localStorage.setItem("OnCart", JSON.stringify(itemsOnCart));
     }, [itemsOnCart]);



    // TODO: Será a função de remover o item do carrinho
    function handleRemoveButtonClick(){ 
        // Remove o item do carrinho com base no índice do item clicado
        setItemsOnCart(prevItems => {
            const updatedItems = [...prevItems];
            // Implemente a lógica para encontrar o índice do item a ser removido (por exemplo, com base no nome do livro)
            const indexToRemove = updatedItems.findIndex(item => item.name === name);
            if (indexToRemove !== -1) {
                updatedItems.splice(indexToRemove, 1);
            }
            return updatedItems;
        });   
        // Força a recarga da página
        window.location.reload();
    }

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
                        onClick={handleRemoveButtonClick}
                    />
                </div>
            </div>
        </div>
    );
    
}