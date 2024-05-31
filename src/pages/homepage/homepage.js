import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import "./homepage.scss"; 
export default function Homepage() {
  return (
    <div className="app-container">
      {/* <Header isHome={true} /> */}
      <main className="main-content">
          <h1>Livros Baratos só aqui</h1>
          <SearchBar />
          <Carousel genero={"Todos"} />
          <Carousel genero={"Todos"} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
