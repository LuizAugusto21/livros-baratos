import React, { useState } from 'react';
import styles from './Filter.module.css';

export default function Filter() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <main>
        <button className={styles["filter-button"]} onClick={togglePopup}>
            Filtrar <img src='/sorter-img.PNG' alt="Filtrar" className={styles["filter-icon"]} />
        </button>

        {isPopupOpen && (
            <div className={styles["popup-overlay"]}>
                <div className={styles["popup"]}>
                    <h2>Filtrar por...</h2>
                    <form>
                        <div className={styles["filter-group"]}>
                            <h3>Tipo de Vendedor</h3>
                            <label>
                                <input type="checkbox" name="tipo_vendedor" value="leitor" /> Leitor
                            </label>
                            <label>
                                <input type="checkbox" name="tipo_vendedor" value="sebo" /> Sebo
                            </label>
                        </div>
                        <div className={styles["filter-group"]}>
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
                        <div className={styles["button-group"]}>
                            <button type="submit" className={styles["apply-filter-button"]}>Aplicar Filtro</button>
                            <button type="button" className={styles["close-button"]} onClick={togglePopup}>Fechar</button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </main>
);

}
