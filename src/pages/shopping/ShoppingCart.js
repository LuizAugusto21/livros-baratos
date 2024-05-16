import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ShoppingCart.css";
import Icone from "../../images/cil_cart.png";


// Implementação provisória do estado do carrinho 
let carrinhoVazio = false;

export default function ShoppingCart(){
    return(  
        <div>
            <Header isLogged={true} isHome={true}></Header>
            <div className="container-principal">
                <div>
                    {
                        carrinhoVazio
                        ?
                        <><img className="carrinho-de-compras" width={200} src={Icone} /><h1 className="texto-carrinho-vazio"> O carrinho está vazio</h1></>
                        :
                        <h1>Há produtos no carrinho!!!</h1>
                    }
                </div>

            </div>
                
            <div className="container-botao-voltar">
                <Button></Button>
            </div>
        </div>
    );
}
