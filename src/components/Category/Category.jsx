import React, { useState, useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import styles from "./Category.module.css";

export default function Category() {
  const { selectedCategory, setSelectedCategory } = useContext(SearchContext);
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['Fiction', 'Non-fiction', 'Romance', 'Historical Fiction', 'Fantasy', 'Todos'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    console.log(`Categoria selecionada: ${category}`);
  };

  return (
    <div className={styles["dropdown-container-category"]}>
      <span className={styles["dropdown-label-category"]}>CATEGORIA</span>
      <div className={styles["dropdown-category"]}>
        <button className={styles["dropdown-toggle-category"]} onClick={toggleDropdown}>
          {selectedCategory ? selectedCategory : '-- TODOS --'}
        </button>
        {isOpen && (
          <ul className={styles["dropdown-menu-category"]}>
            {categories.map((category, index) => (
              <li key={index} onClick={() => handleCategoryClick(category)}>
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
