import React, { useState } from 'react';
import "./Sorter.css";

export default function Sorter() {
  const [isOpen, setIsOpen] = useState(false);
  const orderCategories = ['Alfabética', 'Mais vendidos', 'Novidades', 'Menor Preço', 'Maior Preço'];
  const [selectedCategory, setSelectedCategory] = useState('Mais vendidos');

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
        <div className="dropdown-container-sorter">
        <span className="dropdown-label-sorter">Ordenar por <img src='/sorter-icon.PNG' alt="Filtrar" className="filter-icon" /></span>
        <div className="dropdown-sorter">
            <button className="dropdown-toggle-sorter" onClick={toggleDropdown}>
            {selectedCategory}
            </button>
            {isOpen && (
            <ul className="dropdown-menu-sorter">
                {orderCategories.map((category, index) => (
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
