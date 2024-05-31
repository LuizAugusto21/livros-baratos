
import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import BookCard from "../../components/BookCard/BookCard";
import Button from "../../components/Button/Button";

import "./Wishlist.css";



export default function Wishlist(){

    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerLine = 5;

    useEffect(() => {
        fetch("http://localhost:3000/data/BookData.json")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error("Erro ao buscar os dados:", error);
          });
      }, []);

      // AINDA BOLANDO A LÓGICA QUE VAI SER APLICADA NA CONSTRUÇÃO

      // PONTO IMPORTANTES: CADA LINHA TEM 5 FAVORITOS, ENTÃO AO CHEGAR AO QUINTO ELE TEM QUE PULAR PARA A PRÓXIMA DIV
      // PRECISO DE UM JSON PARA GUARDAR OS FAVORITOS (TEM QUE SER JSON?)

      const listaStorage = localStorage.getItem("ListaFavoritos");
      const [favoritesList, setFavoritesList] = useState(listaStorage ? JSON.parse(listaStorage) : []);

      useEffect(() => {
        localStorage.setItem("ListaFavoritos", JSON.stringify(favoritesList))
      }, [favoritesList])


    return(
        <div>
            <Header isLogged={true} isHome={true}></Header>
            <div className="container-principal">
                <h1 className="titulo-favorito">Wishlist</h1>
                <div className="lista-favoritos">
                    <>
                      {
                        data
                          .slice(startIndex, itemsPerLine)
                          .map((item, index) => {
                            const { name, author } = item;
                            return (
                              <BookCard 
                                key={index}
                                preco={15}
                                nomeLivro={name}
                                Autor={author}
                              />
                            );    
                        }
                    )}
                    </>
                </div>
                <div className="container-botao-voltar"> 
                    {/* <Button></Button> */}
                </div>
            </div>
        </div>
    );
}
