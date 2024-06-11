import React, { useState, useEffect } from "react";
import styles from "./BookCardAlternative.module.scss";
import bookCover from "../../images/default-placeholder.png";


export default function BookCardAlternative( {nomeLivro, Autor, preco, descricao, ano, generos, favoritado}) {

    const [ book, setBook ] = useState(null);

    useEffect(()=> {
        // Cria um objeto com as informações do livro atual
        const newBook = { name: nomeLivro,
          author: Autor,
          price: preco,
          genres: generos,
          description: descricao,
          year: ano,
          isFavorited: favoritado};
    
          setBook(newBook);
      }, [])
    
      const handleDetailClick = () => {
        
        const jsonValue = JSON.stringify(book);
        localStorage.setItem("currentBook", jsonValue);
    
        // Força a recarga da página
        window.location.reload();
    
      }
  
  return (
    <div className={styles["BookCardAlternative-box"]}>
        <div className={styles["BookCardAlternative-content"]}>
            <img src={bookCover} alt="capa do livro" height={140} width={97.5} onClick={ handleDetailClick } />
            <div className={styles["BookCardAlternative-info"]}>
                <p>
                    <div className={styles["price-condition"]}>
                        <div className={styles["price"]}>R${preco}</div>
                        <div className={styles["condition"]}></div>
                    </div>
                    <div className={styles["nome-livro"]}>
                        {nomeLivro}
                    </div>
                </p>
            </div>
        </div>
    </div>
);

}
