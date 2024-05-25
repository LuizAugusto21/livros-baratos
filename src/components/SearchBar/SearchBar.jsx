import React, { useState, useEffect } from "react";
import "./SearchBar.scss";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/BookData.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const filtered = data.filter((item) => {
        const name = item.name ? item.name.toLowerCase() : "";
        const author = item.author ? item.author.toLowerCase() : "";
        const genres = item.genre ? item.genre.toLowerCase() : "";

        return (
          name.includes(search.toLowerCase()) ||
          author.includes(search.toLowerCase()) ||
          genres.includes(search.toLowerCase())
        );
      });
      setSearchResult(filtered);
      console.log(searchResult)
    }
  };

  return (
    <div>
      <input
        className="pesquisa"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch}
        type="text"
        placeholder="Pesquise sua próxima história"
      />
    </div>
  );
}
