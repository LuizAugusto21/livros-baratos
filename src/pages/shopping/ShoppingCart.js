import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ShoppingCart.css";
import Icone from "../../images/cil_cart.png";

// if cart.empty() ? page with list : page with image 
// !!! Utilizar a logica da minha todo list do github !!!

export default function ShoppingCart(){
    return(
        <div>
            <Header isLogged={true} isHome={true}></Header>
            <div className="container-principal">
                <img className="carrinho-de-compras" width={200} src={Icone}/>
                <h1 className="texto-carrinho-vazio">O carrinho está vazio</h1>
            </div>
            
            <div className="container-botao-voltar">
                <Button></Button>
            </div>
        </div>
    );
}
