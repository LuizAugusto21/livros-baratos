import React from "react";
import styles from "./Proximidade.module.scss"; 

export default function proximidade() {
  return (
    <main className={styles["conteudo-proximidade"]}>
      <div className={styles["titulos"]}>
        <h1>Por proximidade</h1>
        <p>Veja sebos próximos a sua região.</p>
      </div>

      <iframe
        title="mapaSebos"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15877.744415595469!2d-35.207862048508524!3d-5.793911176871666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssebos!5e0!3m2!1spt-BR!2sbr!4v1718064901220!5m2!1spt-BR!2sbr"
        width="1000"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
