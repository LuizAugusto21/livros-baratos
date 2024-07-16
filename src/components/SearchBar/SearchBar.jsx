import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const { setSearchResult, selectedCategory } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/livros')
      .then((response) => response.json())
      .then((data) => {
        // Convert genres to arrays
        const processedData = data.map(book => ({
          ...book,
          genero: book.genero.split(',').map(g => g.trim())
        }));
        setData(processedData);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  useEffect(() => {
    const searchQuery = search.toLowerCase();

    const filtered = data.filter((item) => {
      const name = item.nome ? item.nome.toLowerCase() : '';
      const author = item.nomeAutor ? item.nomeAutor.toLowerCase() : '';
      const genres = item.genero ? item.genero.map(g => g.toLowerCase()) : [];

      const matchesSearch = (
        name.includes(searchQuery) ||
        author.includes(searchQuery) ||
        genres.some(genre => genre.includes(searchQuery))
      );

      const matchesCategory = selectedCategory === 'Todos' || 
        (item.genero && genres.includes(selectedCategory.toLowerCase()));

      return matchesSearch && matchesCategory;
    });

    setSearchResult(filtered);
  }, [search, selectedCategory, data, setSearchResult]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate('/search');
    }
  };

  return (
    <div>
      <input
        className={styles['pesquisa']}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        type='text'
        placeholder='Pesquise sua próxima história'
      />
    </div>
  );
}
