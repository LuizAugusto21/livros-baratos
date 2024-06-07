import React from "react";
import Button from "../../components/Button/Button";
import "./BookDetails.css";
import shoppingCartIcon from "../../images/cil_cart.png";

import BookCover from "../../images/Harry-Potter-1.jpg";
import heartEmptyIcon from "../../images/Coracao-vazio.png";
// import heartFullIcon from "../../images/Coracao-cheio.png";
import CarouselAlternative from "../../components/CarouselAlternative/CarouselAlternative";

export default function BookDetails(){

    return(
        <div className="container-principal-livro-detalhado">
            <div className="container-detalhes-e-carrossel"> 
                <div className="container-detalhes">
                    
                    <div className="container-imagem-informacoes">
                        <img className="imagem-capa-livro" src={BookCover} alt="capa do livro" />
                        <div className="informacoes">
                            <span>Titulo: Harry Potter e a Pedra Filosofal</span>
                            <span>Editora: Rocco | Autor(a): J.K. Rowling</span>
                            <span>Ano: 2002</span>
                        </div>
                    </div>
                    
                    <div className="container-detalhes-compra-descricao">
                        <div className="detalhes-compra">
                            <div className="preco-informacoes">
                                <div className="preco">
                                    R$ 20,00
                                </div>
                                <div className="sebo">
                                    Sebo Top
                                </div>
                                <div className="status"> Novo</div>
                            </div>
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
                        <div className="detalhes-descricao"> <p>Alicia Berenson’s life is seemingly perfect until one day when she shoots her husband in the face and then never speaks another word. The ensuing silence captures the public's imagination, and Theo Faber, a forensic psychotherapist, becomes obsessed with uncovering Alicia's motive.</p>
                        </div>
                        <div className="detalhes-botao">
                            <Button/>
                        </div>
                    </div>
                </div>
                <div className="container-carrossel">
                    <CarouselAlternative />
                </div>

            </div>
            
            <div className="container-recomendacoes">
                <span>Também disponível em...</span>
            </div>

        </div>
    );
}