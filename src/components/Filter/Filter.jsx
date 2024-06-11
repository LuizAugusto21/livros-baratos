import React, { useState } from 'react';
import './Filter.css';

export default function Filter() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
      <main>
        <button className="filter-button" onClick={togglePopup}>Filtrar <img src='/sorter-img.PNG' alt="Filtrar" className="filter-icon" /></button>

        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup">
              <h2>Filtrar por...</h2>
              <form>
                <div className="filter-group">
                  <h3>Tipo de Vendedor</h3>
                  <label>
                    <input type="checkbox" name="tipo_vendedor" value="leitor" /> Leitor
                  </label>
                  <label>
                    <input type="checkbox" name="tipo_vendedor" value="sebo" /> Sebo
                  </label>
                </div>
                <div className="filter-group">
                  <h3>Condição da Obra</h3>
                  <label>
                    <input type="checkbox" name="condicao_obra" value="novo" /> Novo
                  </label>
                  <label>
                    <input type="checkbox" name="condicao_obra" value="semi_novo" /> Semi novo
                  </label>
                  <label>
                    <input type="checkbox" name="condicao_obra" value="usado" /> Usado
                  </label>
                </div>
                <div className="button-group">
                  <button type="submit" className="apply-filter-button">Aplicar Filtro</button>
                  <button type="button" className="close-button" onClick={togglePopup}>Fechar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
  );
}
