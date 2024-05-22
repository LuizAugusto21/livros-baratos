import React from "react";
import "./BookCard.scss";

export default function BookCard( {preco, nomeLivro, Autor}) {
  return (
    <div className="BookCard-box">
      <div className="BookCard-content">
        <img src="/default_profilePic.jpg" alt="" height={166} />

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
