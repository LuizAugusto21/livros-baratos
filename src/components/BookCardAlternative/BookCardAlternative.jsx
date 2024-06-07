import React from "react";
import "./BookCardAlternative.scss";
import { Link, useNavigate } from "react-router-dom";
import bookCover from "../../images/default-placeholder.png";


export default function BookCardAlternative( {preco, nomeLivro, Autor}) {
  
  const navigate = useNavigate();
  
  return (
    <div className="BookCardAlternative-box">
      <div className="BookCardAlternative-content">
        <img src={bookCover} alt="capa do livro" height={140} width={97.5} onClick={() => navigate("/detalhes")}/>
        <div className="BookCardAlternative-info">
          <p>
            <div className="price-condition">
              <div className="price">R${preco}</div>
              <div className="condition"></div>
            </div>
            <div className="nome-livro">
              {nomeLivro}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
