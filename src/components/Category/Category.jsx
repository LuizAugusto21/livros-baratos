import React, { useState, useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import "./Category.css";

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
    <div className="dropdown-container">
      <span className="dropdown-label">CATEGORIA</span>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {selectedCategory ? selectedCategory : '-- TODOS --'}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
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
