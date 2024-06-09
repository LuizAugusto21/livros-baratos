import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <SearchContext.Provider value={{ searchResult, setSearchResult, selectedCategory, setSelectedCategory }}>
      {children}
    </SearchContext.Provider>
  );
};
