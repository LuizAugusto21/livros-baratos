import React from "react";
import "./BookCard.scss";

export default function BookCard() {
  return (
    <div className="BookCard-box">
      <div className="BookCard-content">
        <img src="/default_profilePic.jpg" alt="" height={166} />

        <div className="BookCard-info">
          <p>
            <span>
              R$ 15 <br />
              Harry potter
            </span>{" "}
            <br />
            J.K Rowling
          </p>
          <div className="condition"></div>
        </div>

        <button>Comprar</button>
      </div>
    </div>
  );
}
