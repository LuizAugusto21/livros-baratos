import React from "react";
import "./BookCard.scss";
import { Link, useNavigate } from "react-router-dom";



export default function BookCard( {preco, nomeLivro, Autor}) {
  
  const navigate = useNavigate();
  
  return (
    <div className="BookCard-box">
      <div className="BookCard-content">
        <img src="/default-placeholder.png" alt="" height={166} onClick={() => navigate("/detalhes")}/>
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
