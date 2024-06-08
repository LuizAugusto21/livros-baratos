import React, { useState } from 'react';
import "./Category.css";

export default function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['Ficção', 'Não Ficção', 'Romance', 'Mistério', 'Fantasia', 'Todos'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    console.log(`Categoria selecionada: ${category}`);
    // Aqui você pode adicionar lógica para fazer algo com a categoria selecionada, como filtrar os livros, etc.
  };

  return (
    <main>
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
    </main>
  );
}
