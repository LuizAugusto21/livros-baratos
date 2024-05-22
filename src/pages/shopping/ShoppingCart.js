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
                            <img className="carrinho-de-compras" width={200} src={shoppingCartIcon} /><h1 className="texto-carrinho-vazio"> O carrinho está vazio</h1></>
                        :
                        <>
                            <div className="bloco-lista-itens">
                                <h2> Carrinho de compras </h2>
                                <ShoppingCartItem/>
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
