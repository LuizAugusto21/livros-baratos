import React, {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import Button from "../../components/Button/Button";
import "./Wishlist.css";

export default function Wishlist(){

    // Carrega a lista de favoritos
    const listaStorage = localStorage.getItem("Favorites");  
    const [favorites, setFavorites] = useState(listaStorage ? JSON.parse(listaStorage) : []);

    // Atualiza a lista de favoritos a cada mudança
    useEffect(() => {
      localStorage.setItem("Favorites", JSON.stringify(favorites))
    }, [favorites]);

    function emptyFavorites(){
        if(favorites.length <= 0) return true;
        else return false;
    }

    function clearAll(){
      setFavorites([]);
    }

    // Cria os BookCard utilzando a lista 
    return(
        <div>
          <>
          {
            emptyFavorites()
            ?
              <div>aaaa</div>
            :
              <div className="container-principal-favorito">
                <h1 className="titulo-favorito">Wishlist</h1>
                <div className="lista-favoritos">
                    <>
                      {
                        favorites
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
                  <Button></Button> <button onClick={clearAll}>CLEAR ALL</button>
              </div>
              </div>
          }
        </>
        </div>
    );
}
