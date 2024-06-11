
import React, {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import Button from "../../components/Button/Button";
import "./Wishlist.css";

export default function Wishlist(){
      const [favoritesList, setFavoritesList] = useState([]);

      // Preenche a lista de favoritos
      useEffect(() => {
        fetch("http://localhost:3000/data/FavoriteData.json")
          .then((response) => response.json())
          .then((favorites) => {
            setFavoritesList(favorites);
          })
          .catch((error) => {
            console.error("Erro ao buscar os dados:", error);
          });
      }, []);

    // Cria os BookCard utilzando a lista 
    return(
        <div>
            <div className="container-principal-favorito">
                <h1 className="titulo-favorito">Wishlist</h1>
                <div className="lista-favoritos">
                    <>
                      {
                        favoritesList
                          .slice()
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
                    <Button></Button>
                </div>
            </div>
        </div>
    );
}
