import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged) {
      setIsLogged(JSON.parse(storedIsLogged));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLogged', JSON.stringify(isLogged));
  }, [isLogged]);

  const login = () => {
    setIsLogged(true);
    localStorage.setItem('isLogged', JSON.stringify(true));
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem('isLogged');
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
