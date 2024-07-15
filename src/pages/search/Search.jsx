import React, { useContext } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import Category from '../../components/Category/Category';
import Sorter from '../../components/Sorter/Sorter';
import BookCard from '../../components/BookCard/BookCard';
import { SearchContext } from '../../contexts/SearchContext';
import styles from './Search.module.css';

export default function Search() {
  const { searchResult } = useContext(SearchContext);

  return (
    <div className={styles['app-container-search']}>
      <main>
        <div className={styles['main-content-search']}>
          <h1>Livros Baratos só aqui</h1>
          <SearchBar />
        </div>
        <div className={styles['filters-container']}>
          <Category />
          <div className={styles['right-filters']}>
            <Sorter />
            <Filter />
          </div>
        </div>
        <div className={styles['search-results']}>
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
            <div className={styles['results-null']}>
                <p>Nenhum resultado encontrado para a busca.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
