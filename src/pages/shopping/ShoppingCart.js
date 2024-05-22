import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ShoppingCart.css";
import shoppingCartIcon from "../../images/cil_cart.png";
import trashIcon from "../../images/trash-icon.png";
import bookCover from "../../images/Harry-Potter-1.jpg"


// Implementação provisória do estado do carrinho 
let carrinhoVazio = false;

// TODO: Será a função de remover o item do carrinho
function removerItem(){
    // TODO: Implementar a lógica de deleção
   document.getElementById("trash-icon").style.backgroundColor = "red";

}

export default function ShoppingCart(){
    return(  
        <div>
            <Header isLogged={true} isHome={true}></Header>
            <div className="container-principal">
                    {
                        carrinhoVazio
                        ?
                        <>
                            <img className="carrinho-de-compras" width={200} src={shoppingCartIcon} /><h1 className="texto-carrinho-vazio"> O carrinho está vazio</h1></>
                        :
                        <>
                            <div className="bloco-lista-itens">
                                <h2> Carrinho de compras </h2>
                                <div className="lista-itens">
                                    <div className="capa-livro">
                                        <img className = "capa-livro-image" src={bookCover} width={70} height={85}/>
                                    </div>
                                    <div className="titulo-livro"> Harry Potter and The Philosofer Stone
                                    <div className="autor-livro"> J.K. Rowling </div>
                                    </div>
                                    
                                    <div className="preco-e-remover">
                                        <span className="preco-text">R$ 15,00</span>
                                        <img 
                                        id="trash-icon" className="trash-icon" src={trashIcon} onClick={ () => {removerItem()} }/>
                                    </div>
                                </div>
                            </div>
                            <div className="resumo-pedido">
                            <h2> Resumo do pedido </h2>
                            </div>
                        </>
                    }
            </div>
                
            <div className="container-botao-voltar">
                <Button></Button>
            </div>
        </div>
    );
}
