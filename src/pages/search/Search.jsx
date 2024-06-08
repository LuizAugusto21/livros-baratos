import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import Category from "../../components/Category/Category";
import Sorter from "../../components/Sorter/Sorter";
import "./Search.css"; 

export default function Search() {
  return (
    <div className="app-container">
      <main>
        <div className="main-content">
          <h1>Livros Baratos só aqui</h1>
          <SearchBar />
        </div>
        <div className="filters-container">
        
        <Category />         
          <div className="right-filters">      
            <Sorter />
            <Filter />
          </div>
        </div>
      </main>
    </div>
  );
}
