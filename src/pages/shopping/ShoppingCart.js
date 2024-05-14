import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ShoppingCart.css";


// if cart.empty() ? page with list : page with image 
// !!! Utilizar a logica da minha todo list do github !!!

export default function ShoppingCart(){
    return(
        <div>
            <Header isLogged={true} isHome={true}></Header>
            <div className="container-principal">
                <div className="lista-produtos">
                    {/* TODO */}
                </div>
                <div className="produtos-no-carrinho">
                    {/* TODO */}
                </div>
            </div>
            
            <div className="container-botao-voltar">
                <Button></Button>
            </div>
        </div>
    );
}