import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
import BookCard from '../components/BookCard/BookCard'


export default function homepage() {
  return (
    <div>
      <Header isHome={true}></Header>
      <div className="title-searchbar">
        <h1>Livros Baratos só aqui</h1>
        <SearchBar></SearchBar>
      </div>

      <BookCard></BookCard>
      <Footer></Footer>
    </div>
  );
}
