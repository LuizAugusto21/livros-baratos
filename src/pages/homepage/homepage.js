import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";
import BookCard from '../../components/BookCard/BookCard'

import "../homepage/homepage.scss"
import Carousel from "../../components/Carousel/Carousel";


export default function homepage() {
  return (
    <div>
      <Header isHome={true}></Header>
      <div className="title-searchbar">
        <h1>Livros Baratos só aqui</h1>

        <SearchBar></SearchBar>
        <Carousel genero={"Todos"}></Carousel>
      </div>
      
      <Footer></Footer>
    </div>
  );
}
