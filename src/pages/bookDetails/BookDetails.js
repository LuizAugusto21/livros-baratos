import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import {Link, useNavigate} from "react-router-dom"
import "./BookDetails.css";
import shoppingCartIcon from "../../images/cil_cart.png";
import BookCover from "../../images/Harry-Potter-1.jpg";
import heartEmptyIcon from "../../images/Coracao-vazio.png";
// import heartFullIcon from "../../images/Coracao-cheio.png";
import CarouselAlternative from "../../components/CarouselAlternative/CarouselAlternative";

export default function BookDetails(){

    const navigate = useNavigate();

    const [ book, setBook ] = useState(null);
    const [ favorites, setFavorites ] = useState([]);
    const [ itemsOnCart, setItemsOnCart ] = useState([]);

     // Função para salvar os dados no localStorage
    const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    // Adiciona o livro a lista de favoritos
    function handleFavoriteButtonClick(){

        // Adiciona o livro aos favoritos
        const updatedFavorites = [...favorites, book]; 
        setFavorites(updatedFavorites);

        // Registra a lista atualizada
        saveToLocalStorage("Favorites", updatedFavorites);

        // TODO: Mudar o icone de coração do botão

    }

    // Adiciona o livro ao carrinho de compras
    function handleAddToCartButton(){
        const updatedItemsOnCart = [...itemsOnCart, book]; 
        setItemsOnCart(updatedItemsOnCart);

        // Registra a lista atualizada
        saveToLocalStorage("OnCart", updatedItemsOnCart);

    }

    // Adiciona ao carrinho e vai para a página do carrinho
    function handleBuyButtonClick(){
        const updatedItemsOnCart = [...itemsOnCart, book]; 
            setItemsOnCart(updatedItemsOnCart);
    
            // Registra a lista atualizada
            saveToLocalStorage("OnCart", updatedItemsOnCart);
    
            // Navega até a página de carrinho
            navigate("/carrinho")
      }

    useEffect(() => {
        // Carrega o livro atual
        const storedBook = loadCurrentData("currentBook");
        if (storedBook) {
            setBook(storedBook);
        }
      }, []);

      useEffect(() => {
        // Carrega a lista atual de favoritos
        const storedFavorites = loadListData("Favorites");
        if (storedFavorites) {
            setFavorites(storedFavorites);
        }
      }, []);

      useEffect(() => {
        // Carrega a lista atual de itens no carrinho
        const storedItensOnCart = loadListData("OnCart");
        if (storedItensOnCart) {
            setItemsOnCart(storedItensOnCart);
        }
      }, []);

    // Carrega o livro atual 
    function loadCurrentData(key){
        const jsonValue = localStorage.getItem(key);
        if(jsonValue){
            try{
                return JSON.parse(jsonValue);
            } catch(e) {
                console.error("Erro ao analisar JSON: ", e);
                return null;
            }
        }
        return null;
     }

    // Carrega a lista de favoritos
    function loadListData(key){
        const jsonValue = localStorage.getItem(key);
        if(jsonValue){
            try{
                return JSON.parse(jsonValue);
            } catch(e) {
                console.error("Erro ao analisar JSON: ", e);
                return [];
            }
        }
        return [];
    }
  
    return(
        <div className="container-principal-livro-detalhado">
            <div className="container-detalhes-e-carrossel"> 
                <div className="container-detalhes">
                    
                    <div className="container-imagem-informacoes">
                        <img className="imagem-capa-livro" src={BookCover} alt="capa do livro" />
                        <>
                            <div className="informacoes">
                                { book 
                                ?
                                    <div>
                                        <span>Titulo: {book.name}</span>
                                        <span>Editora: Genêrico | Autor(a): {book.author}</span>
                                        <span>Ano: {book.year}</span>
                                    </div>
                                :
                                    <div></div>
                                }
                            </div>
                        </>
                    </div>
                    
                    <div className="container-detalhes-compra-descricao">
                        <div className="detalhes-compra">
                            <>
                            { book 
                            ?
                                <div className="preco-informacoes">
                                    
                                        <div className="preco">
                                            R$ {book.price.toFixed(2)}
                                        </div>
                                        <div className="sebo">
                                            Sebo Top
                                        </div>
                                        <div className="status"> Novo</div>
                                </div> 
                            :
                                <div></div>
                            }   
                            </>
                            <div className="preco-botoes">
                                <div className="botao-comprar" onClick={handleBuyButtonClick}>
                                    Comprar
                                </div>
                                <div className="adicionar-carrinho-favorito">
                                    <button className="adicionar-carrinho" onClick={handleAddToCartButton}> 
                                    <img className="carrinho-de-compras" src={shoppingCartIcon} alt="icone de carrinho"/>
                                    <span className="adicionar">
                                        ADICIONAR
                                    </span> 
                                    <img className="carrinho-de-compras" src={shoppingCartIcon} alt="icone de carrinho" />
                                    </button>
                                    <button className="adicionar-favorito" onClick={handleFavoriteButtonClick}>
                                        <img  className="icone-coracao" alt="icone de coração" src={heartEmptyIcon} />          
                                    </button>
                                </div>
                            </div>
                        </div>
                        <>
                            { book                          
                            ?
                                <div className="detalhes-descricao"> 
                                    <p> {book.description} </p>
                                </div>
                            :                                   
                                <div></div>
                            }
                        </>
                        <div className="detalhes-botao">
                            <Button/>
                        </div>
                    </div>
                </div>
                <div className="container-carrossel">
                    {/* <CarouselAlternative /> */}
                </div>

            </div>
            
            <div className="container-recomendacoes">
                <span>Também disponível em...</span>
                <div className="recomendacao">
                    <div className="sebo-nome">
                        Livreto Ninja
                    </div>
                    <div className="container-preco-condition">
                        <div className="preco-recomendacao">
                            R$ 15,00
                        </div>   
                        <div className="condition"></div>
                    </div>
                    
                </div>
                <div className="recomendacao">
                <div className="sebo-nome">
                        Sebo Rio Branco
                    </div>
                    <div className="container-preco-condition">
                        <div className="preco-recomendacao">
                            R$ 25,00
                        </div>   
                        <div className="condition"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}