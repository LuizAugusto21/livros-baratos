import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./homepage.module.scss"; 
export default function Homepage() {
  return (
    <div className={styles["app-container"]}>
      <main className={styles["main-content"]}>
          <h1>Livros Baratos só aqui</h1>
          <SearchBar />
          <Carousel genero={"Todos"} />
          <Carousel genero={"Todos"} />
      </main>
    </div>
  );
}
