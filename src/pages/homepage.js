import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";

export default function homepage() {
  return (
    <div>
      <Header isHome={true}></Header>
      <h1>Livros Baratos só aqui</h1>
      <SearchBar></SearchBar>
      <Footer></Footer>
    </div>
  );
}
