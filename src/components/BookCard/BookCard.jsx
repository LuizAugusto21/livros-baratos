import React from "react";
import "./BookCard.scss";
import { Link, useNavigate } from "react-router-dom";



export default function BookCard( {nomeLivro, Autor, preco, descricao, ano, generos}) {
  
  const navigate = useNavigate();

  const handleDetailClick = () => {
    
    // Salva o livro atual em formato JSON
    const book = { name: nomeLivro,
                   author: Autor,
                   price: preco,
                   genres: generos,
                   description: descricao,
                   year: ano }

    const jsonValue = JSON.stringify(book);
    localStorage.setItem('currentBook', jsonValue);
    
    // Vai para a página de detalhes
    navigate("/detalhes");

  }
  
  return (
    <div className="BookCard-box">
      <div className="BookCard-content">
        <img src="/default-placeholder.png" alt="" height={166} onClick={handleDetailClick}/>
        <div className="BookCard-info">
          <p>
            <span>
              R${preco}<br />
              {nomeLivro}
            </span>{" "}
            <br />
            {Autor}
          </p>
          <div className="condition"></div>
        </div>
        <button>Comprar</button>
      </div>
    </div>
  );
}
