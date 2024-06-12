import React, { useEffect, useState, useRef } from "react";

import styles from "./CarouselAlternative.module.scss";
import BookCardAlternative from "../BookCardAlternative/BookCardAlternative";

export default function CarouselAlternative({ genero}) {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

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

  const handleNext = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else {
      setStartIndex(0);  // Reinicia ao início quando chega ao fim
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    } else {
      setStartIndex(Math.max(data.length - itemsPerPage, 0));  // Vai para o final se está no início
    }
  };

  return (
    <div className={styles["carousel-content"]}>
        <h1>{genero}</h1>
        <div className={styles["carousel"]} ref={carousel}>
            <button onClick={handlePrev} className={styles["leftArrow"]} disabled={data.length <= itemsPerPage}>
                <img src="/arrow_icon.png" alt="Scroll Left" />
            </button>
            {data
                .slice(startIndex, startIndex + itemsPerPage)
                .map((item, index) => {
                    const { name, author, year, genre, description } = item;
                    return (
                        <BookCardAlternative
                        key={index}
                        preco={15}
                        nomeLivro={name}
                        Autor={author}
                        ano={year}
                        generos={genre}
                        descricao={description}
                        />
                    );
                })}
            <button onClick={handleNext} className={styles["rightArrow"]} disabled={data.length <= itemsPerPage}>
                <img src="/arrow_icon.png" alt="Scroll right" />
            </button>
        </div>
    </div>
);

}
