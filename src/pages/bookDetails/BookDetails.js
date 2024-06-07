import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import "./BookDetails.css";
import shoppingCartIcon from "../../images/cil_cart.png";

import BookCover from "../../images/Harry-Potter-1.jpg";
import heartEmptyIcon from "../../images/Coracao-vazio.png";
// import heartFullIcon from "../../images/Coracao-cheio.png";
import CarouselAlternative from "../../components/CarouselAlternative/CarouselAlternative";

export default function BookDetails(){

    const [ book, setBook ] = useState(null);

    useEffect(() => {
        // Carregar o objeto do localStorage ao montar o componente
        const storedBook = loadCurrentBookData('currentBook');
        if (storedBook) {
          setBook(storedBook);
          console.log("O VALOR DE book é " + storedBook.name);
        }
      }, []);

      // Função de carregar o livro atual ()
    function loadCurrentBookData(key){
        const jsonValue = localStorage.getItem(key); 

        if(jsonValue !== null){
            return JSON.parse(jsonValue);
        }
        return null;
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
                                    <span>Editora: Genrico | Autor(a): {book.author}</span>
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
                                <div className="botao-comprar">
                                    Comprar
                                </div>
                                <div className="adicionar-carrinho-favorito">
                                    <button className="adicionar-carrinho"> 
                                    <img className="carrinho-de-compras" src={shoppingCartIcon} alt="icone de carrinho"/>
                                    <span className="adicionar">
                                        ADICIONAR
                                    </span> 
                                    <img className="carrinho-de-compras" src={shoppingCartIcon} alt="icone de carrinho" />
                                    </button>
                                    <button className="adicionar-favorito">
                                        <img  className="icone-coracao" alt="icone de coração" src={heartEmptyIcon} />          
                                    </button>
                                </div>
                            </div>
                        </div>
                        <>
                            {
                                book 
                                
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