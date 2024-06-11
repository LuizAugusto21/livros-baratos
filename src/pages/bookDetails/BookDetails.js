import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import {Link, useNavigate} from "react-router-dom"
import styles from "./BookDetails.module.css";
import shoppingCartIcon from "../../images/cil_cart.png";
import BookCover from "../../images/default-placeholder.png";
import heartEmptyIcon from "../../images/Coracao-vazio.png";
import heartFullIcon from "../../images/Coracao-cheio.png";
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

        if(book.isFavorited){
            // Livro já foi favoritado
            setFavorites(prevFavorites => {
                const updatedFavorites = [...prevFavorites];
                // Implemente a lógica para encontrar o índice do item a ser removido (por exemplo, com base no nome do livro)
                const indexToRemove = updatedFavorites.findIndex(item => item.name === book.name);
                if (indexToRemove !== -1) {
                    updatedFavorites.splice(indexToRemove, 1);

                    book.isFavorited = !book.isFavorited;
                    
                    // Registra a lista atualizada
                    saveToLocalStorage("Favorites", updatedFavorites);
                }
                return updatedFavorites;
            });
        }
        else{
            // Livro não foi favoritado
            
            // Adiciona o livro aos favoritos
            const updatedFavorites = [...favorites, book]; 
            setFavorites(updatedFavorites);

            book.isFavorited = !book.isFavorited;

            // Registra a lista atualizada
            saveToLocalStorage("Favorites", updatedFavorites);   
        }

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

    function isFavorited(){
        return book ?  book.isFavorited : false;
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
  
    return (
        <div className={styles["container-principal-livro-detalhado"]}>
            <div className={styles["container-detalhes-e-carrossel"]}>
                <div className={styles["container-detalhes"]}>
                    <div className={styles["container-imagem-informacoes"]}>
                        <img className={styles["imagem-capa-livro"]} src={BookCover} alt="capa do livro" />
                        <>
                            <div className={styles["informacoes"]}>
                                { book 
                                ?
                                    <div>
                                        <span>Titulo: {book.name}</span>
                                        <span>Autor(a): {book.author}</span>
                                        <span>Gênero: {book.genres}</span>
                                        <span>Ano: {book.year}</span>
                                    </div>
                                :
                                    <div></div>
                                }
                            </div>
                        </>
                    </div>
                    
                    <div className={styles["container-detalhes-compra-descricao"]}>
                        <div className={styles["detalhes-compra"]}>
                            <>
                            { book 
                            ?
                                <div className={styles["preco-informacoes"]}>
                                    
                                        <div className={styles["preco"]}>
                                            R$ {book.price.toFixed(2)}
                                        </div>
                                        <div className={styles["sebo"]}>
                                            Sebo Top
                                        </div>
                                        <div className={styles["status"]}> Novo</div>
                                </div> 
                            :
                                <div></div>
                            }   
                            </>
                            <div className={styles["preco-botoes"]}>
                                <div className={styles["botao-comprar"]} onClick={handleBuyButtonClick}>
                                    Comprar
                                </div>
                                <div className={styles["adicionar-carrinho-favorito"]}>
                                    <button className={styles["adicionar-carrinho"]} onClick={handleAddToCartButton}> 
                                    <img className={styles["carrinho-de-compras"]} src={shoppingCartIcon} alt="icone de carrinho"/>
                                    <span className={styles["adicionar"]}>
                                        ADICIONAR
                                    </span> 
                                    <img className={styles["carrinho-de-compras"]} src={shoppingCartIcon} alt="icone de carrinho" />
                                    </button>
                                    <button className={styles["adicionar-favorito"]} onClick={handleFavoriteButtonClick}>
                                        <>
                                            {
                                                isFavorited()
                                                ?
                                                <img className={styles["icone-coracao"]} alt="icone de coração" src={heartFullIcon} />  
                                                :
                                                <img className={styles["icone-coracao"]} alt="icone de coração" src={heartEmptyIcon} />  
                                            }
                                        </>
                                                
                                    </button>
                                </div>
                            </div>
                        </div>
                        <>
                            { book                          
                            ?
                                <div className={styles["detalhes-descricao"]}> 
                                    <p> {book.description} </p>
                                </div>
                            :                                   
                                <div></div>
                            }
                        </>
                        <div className={styles["detalhes-botao"]}>
                            <Button />
                        </div>
                    </div>
                </div>
                <div className={styles["container-carrossel"]}>
                    <CarouselAlternative />
                </div>
            </div>
            
            <div className={styles["container-recomendacoes"]}>
                <span>Também disponível em...</span>
                <div className={styles["recomendacao"]}>
                    <div className={styles["sebo-nome"]}>
                        Livreto Ninja
                    </div>
                    <div className={styles["container-preco-condition"]}>
                        <div className={styles["preco-recomendacao"]}>
                            R$ 15,00
                        </div>   
                        <div className={styles["condition"]}></div>
                    </div>
                </div>
                <div className={styles["recomendacao"]}>
                    <div className={styles["sebo-nome"]}>
                        Sebo Rio Branco
                    </div>
                    <div className={styles["container-preco-condition"]}>
                        <div className={styles["preco-recomendacao"]}>
                            R$ 25,00
                        </div>   
                        <div className={styles["condition"]}></div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}