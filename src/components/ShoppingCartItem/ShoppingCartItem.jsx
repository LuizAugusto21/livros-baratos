import React from "react";
import "./ShoppingCartItem.scss";
import trashIcon from "../../images/trash-icon.png";
import bookCover from "../../images/Harry-Potter-1.jpg"

// TODO: Será a função de remover o item do carrinho
function removerItem(){
    // TODO: Implementar a lógica de deleção
   document.getElementById("trash-icon").style.backgroundColor = "red";

}

export default function ShoppingCartItem(){
    return(
        <div>
            <div className="item-carrinho">
                <div className="capa-livro">
                    <img className = "capa-livro-image" src={bookCover} width={70} height={85}/>
                </div>
                <div className="titulo-livro"> Harry Potter and The Philosofer Stone
                <div className="autor-livro"> J.K. Rowling </div>
                </div>
                
                <div className="preco-e-remover">
                    <span className="preco-text">R$ 15,00</span>
                    <img 
                    id="trash-icon" className="trash-icon" src={trashIcon} onClick={ () => {removerItem()} } />
                </div>
            </div>
        </div>
    );
}