import React, {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import Button from "../../components/Button/Button";
import styles from "./Wishlist.module.css";
import HeartIcon from "../../images/heart-icon.png";

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
    return (
      <div>
          <>
              {
                  emptyFavorites()
                      ? 
                      <div className={styles["container-principal-vazio-wishlist"]}>
                          <img className={styles["icone-coracao"]} width={200} src={HeartIcon} alt="Icone de coração" />
                          <h1 className={styles["texto-favoritos-vazio"]}> Você ainda não possui favoritos</h1>
                          <Button />
                      </div>
                      :
                      <div className={styles["container-principal-favorito"]}>
                          <h1 className={styles["titulo-favorito"]}>Wishlist</h1>
                          <div className={styles["lista-favoritos"]}>
                              <>
                                  {
                                      favorites
                                          .slice()
                                          .map((item, index) => {
                                              const { name, author, year, genres, description} = item;
                                              return (
                                                  <BookCard
                                                    key={index}
                                                    preco={15}
                                                    nomeLivro={name}
                                                    Autor={author}
                                                    ano={year}
                                                    generos={genres}
                                                    descricao={description}
                                                    favoritado={favorites[index].isFavorited}
                                                                            />
                                              );
                                          })
                                  }
                              </>
                          </div>
                          <div className={styles["container-botao-voltar"]}>
                              <Button></Button>
                          </div>
                      </div>
              }
          </>
      </div>
  );
  
}
