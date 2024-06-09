import React, { useContext } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import Category from '../../components/Category/Category';
import Sorter from '../../components/Sorter/Sorter';
import BookCard from '../../components/BookCard/BookCard';
import { SearchContext } from '../../contexts/SearchContext';
import './Search.css';

export default function Search() {
  const { searchResult } = useContext(SearchContext);

  return (
    <div className='app-container'>
      <main>
        <div className='main-content'>
          <h1>Livros Baratos só aqui</h1>
          <SearchBar />
        </div>
        <div className='filters-container'>
          <Category />
          <div className='right-filters'>
            <Sorter />
            <Filter />
          </div>
        </div>
        <div className='search-results'>
          {searchResult.length > 0 ? (
            searchResult.map((book, index) => (
              <BookCard
                key={index}
                preco={15}
                nomeLivro={book.name}
                Autor={book.author}
              />
            ))
          ) : (
            <div className='results-null'>
                <p>Nenhum resultado encontrado para a busca.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
