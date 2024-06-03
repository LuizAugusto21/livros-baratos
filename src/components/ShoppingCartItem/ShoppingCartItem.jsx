import React from "react";
import "./ShoppingCartItem.scss";
import trashIcon from "../../images/trash-icon.png";
import bookCover from "../../images/Harry-Potter-1.jpg";

// TODO: Será a função de remover o item do carrinho
function removerItem(){ /* Implementar lógica */}

export default function ShoppingCartItem({book_cover=bookCover, name, author, price}){
    return(
        <div>
            <div className="item-carrinho">
                <div className="capa-livro">
                    <img className = "capa-livro-image" alt="capa do livro" src={book_cover} width={70} height={85}/>
                </div>
                <div className="titulo-livro">{name}
                <div className="autor-livro">{author}</div>
                </div>
                
                <div className="preco-e-remover">
                    <span className="preco-text">R$ {price}</span>
                    <img 
                    id="trash-icon" className="trash-icon" alt="icone de lixeira" src={trashIcon} onClick={ () => {removerItem()} } />
                </div>
            </div>
        </div>
    );
}