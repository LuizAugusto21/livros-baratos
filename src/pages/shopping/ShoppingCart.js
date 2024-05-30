import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ShoppingCart.css";
import shoppingCartIcon from "../../images/cil_cart.png";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";


// Implementação provisória do estado do carrinho 
let carrinhoVazio = false;

export default function ShoppingCart(){
    return(  
        <div>
            <Header isLogged={true} isHome={true}></Header>
            <div className="container-principal">
                    {
                        carrinhoVazio
                        ?
                        <>
                            <img className="carrinho-de-compras" width={200} src={shoppingCartIcon} alt="Carrinho de compras vazio"/><h1 className="texto-carrinho-vazio"> O carrinho está vazio</h1></>
                        :
                        <>
                            <div className="bloco-lista-itens">
                                <h2> Carrinho de compras </h2>
                                {/* TODO: Implementar a lógica de preenchimento dos dados do livro no componente */}
                                <ShoppingCartItem title="Harry Potter and the Philosofer Stone" author="J.K. Rowling" price={17}/> 
                                <ShoppingCartItem title="Harry Potter and the Philosofer Stone" author="J.K. Rowling" price={17}/> 
                            </div>
                            <div className="resumo-pedido">
                                <h2> Resumo do pedido </h2>
                                <div className="item-resumo-pedido">
                                    <div className="item-resumo-texto">Item 1</div>
                                    <div className="item-resumo-preco">R$ 15,00</div>
                                </div>
                                <div className="item-resumo-pedido">
                                    <div className="item-resumo-texto">Item 1</div>
                                    <div className="item-resumo-preco">R$ 15,00</div>
                                </div>
                                <hr></hr>
                                <div className="total-resumo-pedido">
                                    <div className="total-resumo-texto">Total</div>
                                    <div className="total-resumo-preco">R$ 30,00</div>
                                </div>                   
                            </div>
                            <div className="container-botao-geral">
                                    <Button></Button>
                                </div>
                                <div className="container-botao-geral">
                                    <Button text="Comprar"></Button>
                                </div>
                        </>
                    }
            </div>
        </div>
    );
}
