import React, {useState, useEffect} from "react";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import shoppingCartIcon from "../../images/cil_cart.png";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import ItensOnCartResume from "../../components/ItemOnCartResume/ItensOnCartResume";
import "./ShoppingCart.css";

export default function ShoppingCart(){
    const [itensOnCart, setItensOnCart] = useState([]);

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



    /* 
    
    criaa novo elemento div { class=resumo-texto (id?) }
    preencher com "Item + " " + { contador }"
    associar novo elemento a div pai

    criar novo elemento div { class=resumo-preco (id?) }
    preencher com "R$ { preco }"
    associar novo elemento a div pai
    
    */

    // useEffect(() => { fillItensResumeOnCart() }, [])
    
    // function fillItensResumeOnCart(){
    //     for(let i=0; i<itensOnCart.length; i++){
    //         let newDivElementText = document.createElement("div")
    //         newDivElementText.className = "resumo-pedido-texto"
    //         newDivElementText.textContent = "Item " + count
    //         document.getElementById("item-resumo-pedido").appendChild(newDivElementText)

    //         let newDivElementPrice = document.createElement("div")
    //         newDivElementPrice.className = "resumo-pedido-preco"
    //         newDivElementPrice.textContent = "R$" + 20 // Valor provisório
    //         document.getElementById("item-resumo-pedido").appendChild(newDivElementPrice)
            
    //         setCount(count+1)
    //     }
    //     setCount(0)
    // }

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
                        <div className="lista-itens-resumo-pedido">
                            <ItensOnCartResume size={itensOnCart.length}/>
                        </div>
                        <hr></hr>
                        <div className="total-resumo-pedido">
                            <div className="total-resumo-texto">Total</div>
                            <div className="total-resumo-preco">R$ 30</div>
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
