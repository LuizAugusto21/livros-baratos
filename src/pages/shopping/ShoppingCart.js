import React, {useState, useEffect} from "react";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./ShoppingCart.css";
import shoppingCartIcon from "../../images/cil_cart.png";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";


// Implementação provisória do estado do carrinho 
let carrinhoVazio = false;

export default function ShoppingCart(){
    const [itensOnCart, setItensOnCart] = useState([]);
    const [count, setCount] = useState(0);

    // Preenche a lista de itens no carrinho
    useEffect(() => {
        fetch("http://localhost:3000/data/ItensOnCartData.json")
        .then((response) => response.json())
        .then((itens) => {
            setItensOnCart(itens);
        })
        .catch((error) => {
            console.error("Erro ao buscar os dados:", error);
        });
    }, []);

    function emptyCart(){
        if(itensOnCart.length <= 0) return true
        else return false;
    }

    return(  
        <div>
            <Header isLogged={true} isHome={true}></Header>
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
                <div className="container-principal">
                    <div className="bloco-lista-itens">
                        <h2> Carrinho de compras </h2>
                        <>
                            {
                                itensOnCart
                                    .slice()
                                    .map((item, index) => {
                                    const {name, author} = item;
                                    let count=1;
                                    return(
                                        <ShoppingCartItem 
                                            key={index}
                                            name={name}
                                            author={author}
                                            price={20} />
                                    )
                                    }
                                )
                            }
                        </>
                    </div>
                    <div className="resumo-pedido">
                        <h2> Resumo do pedido </h2>
                        <div className="item-resumo-pedido">
                        <>
                            {
                                itensOnCart
                                    .slice()
                                    .map(() => {
                                    return(
                                        <>
                                            <div className="item-resumo-texto">Item 1</div>
                                            <div className="item-resumo-preco">R$ 20</div>
                                            {/* TALVEZ EU TENHA QUE CRIAR UM COMPONENTE */}
                                        </>
                                    )
                                    }
                                )
                            }
                        </>
                        </div>
                        <hr></hr>
                        <div className="total-resumo-pedido">
                            <div className="total-resumo-texto">Total</div>
                            <div className="total-resumo-preco">R$ 30,00</div>
                        </div> 
                        <div className="container-botao-geral">
                            <Button/>
                        </div>
                        <div className="container-botao-geral">
                            <Button text="Comprar"/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
