import React, {useState, useEffect} from "react";
import Button from "../../components/Button/Button";
import shoppingCartIcon from "../../images/cil_cart.png";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import ItensOnCartResume from "../../components/ItensOnCartResume/ItensOnCartResume";
import "./ShoppingCart.css";

export default function ShoppingCart(){
    const [itensOnCart, setItensOnCart] = useState([]);
    let totalPrice = 0;
    
    // Preenche a lista de itens no carrinho
    useEffect(() => {
        fetch("http://localhost:3000/data/ItensOnCartData.json")
        .then((response) => response.json())
        .then((itens) => {
            setItensOnCart(itens);
            calculateTotalPrice();
        })
        .catch((error) => {
            console.error("Erro ao buscar os dados:", error);
        });
    }, [itensOnCart]); 

    function emptyCart(){
        if(itensOnCart.length <= 0) return true;
        else return false;
    }

    function calculateTotalPrice(){
        let precos = itensOnCart.map(item => item.price);
        precos.forEach(item=>{totalPrice+=item});

        document.getElementById("preco-total").innerText = "R$ " + totalPrice;

        totalPrice=0;
    }

   return(  
        <div>
            {
                emptyCart()
                ?
                <>
                    <div className="container-principal-vazio">
                        <img className="carrinho-de-compras" width={200} src={shoppingCartIcon} alt="Carrinho de compras vazio"/>
                        <h1 className="texto-carrinho-vazio"> O carrinho está vazio</h1>
                            <Button/>
                    </div>
                </>
                :
                <div className="container-principal-carrinho">
                    <div className="bloco-lista-itens">
                        <h2> Carrinho de compras </h2>
                        <>
                            {
                                itensOnCart
                                    .slice()
                                    .map((item, index) => {
                                    const {name, author, price} = item;
                                    return(
                                        <ShoppingCartItem 
                                            key={index}
                                            name={name}
                                            author={author}
                                            price={price} />
                                    )
                                    }
                                )
                            }
                        </>
                    </div>
                    <div className="resumo-pedido">
                        <h2> Resumo do pedido </h2>
                        <div className="lista-itens-resumo-pedido">
                            <ItensOnCartResume size={itensOnCart.length} price={itensOnCart.map(e=>e.price)}/>
                        </div>
                        <hr></hr>
                        <div className="total-resumo-pedido">
                            <div className="total-resumo-texto">Total</div>
                            <div className="total-resumo-preco" id="preco-total">R$ </div>
                        </div> 
                    </div>
                        <div className="container-botao-geral">
                            <Button/>
                        </div>
                        <div className="container-botao-geral">
                            <Button text="Comprar"/>
                        </div>
                </div>
            }
        </div>
    );
}
