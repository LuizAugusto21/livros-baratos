import React, { useState, useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import styles from "./Sorter.module.css";

export default function Sorter() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSearchResult } = useContext(SearchContext);

  const orderAlphabetically = (books) => {
    const sortedBooks = [...books].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });
    setSearchResult(sortedBooks);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = () => {
    setIsOpen(false);
    orderAlphabetically(); // Chama a função para ordenar alfabeticamente
  };

  return (
    <main>
        <div className={styles["dropdown-container-sorter"]}>
            <span className={styles["dropdown-label-sorter"]}>Ordenar por <img src='/sorter-icon.PNG' alt="Filtrar" className={styles["sorter-icon"]} /></span>
            <div className={styles["dropdown-sorter"]}>
                <button className={styles["dropdown-toggle-sorter"]} onClick={toggleDropdown}>
                    Alfabética
                </button>
                {isOpen && (
                    <ul className={styles["dropdown-menu-sorter"]}>
                        <li onClick={handleCategoryClick}>Alfabética</li>
                    </ul>
                )}
            </div>
        </div>
    </main>
);

}
