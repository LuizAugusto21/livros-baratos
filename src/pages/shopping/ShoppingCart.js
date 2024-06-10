import React, {useState, useEffect} from "react";
import Button from "../../components/Button/Button";
import shoppingCartIcon from "../../images/cil_cart.png";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem";
import ItemsOnCartResume from "../../components/ItemsOnCartResume/ItemsOnCartResume";
import "./ShoppingCart.css";

export default function ShoppingCart(){
    
    // Carrega a lista de livros no carrinho
    const listaStorage = localStorage.getItem("OnCart");  
    const [itemsOnCart, setItemsOnCart] = useState(listaStorage ? JSON.parse(listaStorage) : []);
 
     // Atualiza a lista de favoritos a cada mudança
     useEffect(() => {
       localStorage.setItem("OnCart", JSON.stringify(itemsOnCart));
           calculateTotalPrice();
     }, [itemsOnCart]);
 
    function emptyCart(){
        if(itemsOnCart.length <= 0) return true;
        else return false;
    }

    function calculateTotalPrice(){
        let totalPrice = 0;
        if(itemsOnCart.length > 0){
            let precos = itemsOnCart.map(item => item.price);
            precos.forEach(item=>{totalPrice+=item});

            const precoTotalElement = document.getElementById("preco-total")
            if(precoTotalElement){
                precoTotalElement.innerText = "R$ " + totalPrice;
            }

        }
        
    }

    function clearAll(){
        setItemsOnCart([]);
      }

   return(  
        <div>
            {
                emptyCart()
                ?
                <>
                    <div className="container-principal-vazio-shopping">
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
                                itemsOnCart
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
                            <ItemsOnCartResume size={itemsOnCart.length} price={itemsOnCart.map(e=>e.price)}/>
                        </div>
                        <hr></hr>
                        <div className="total-resumo-pedido">
                            <div className="total-resumo-texto">Total</div>
                            <div className="total-resumo-preco" id="preco-total">R$ 0.00</div>
                        </div> 
                    </div>
                        <div className="container-botao-geral">
                            <Button/>
                        </div>
                        <div className="container-botao-geral">
                            <Button text="Comprar"/>
                        </div>

                        <button onClick={clearAll}>Clear all</button>
                </div>
            }
        </div>
    );
}
