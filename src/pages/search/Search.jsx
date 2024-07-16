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
                preco={book.preco}
                nomeLivro={book.nome}
                Autor={book.nomeAutor}
                generos={book.genero}
                descricao={book.descricao}
                imagemCapa={book.imagemCapa}
                condicao={book.condicao}
                situacao={book.situacao}
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
