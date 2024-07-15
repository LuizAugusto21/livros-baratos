import { useState } from 'react';
import axios from 'axios';
import { useAuth as useAuthContext } from '../contexts/AuthContext';

const API_BASE_URL = 'http://localhost:8080/usuario';

export const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { login: loginContext, logout: logoutContext, user } = useAuthContext();

  const login = async (login, senha) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { login, senha });
      if (response.status === 200) {
        loginContext(response.data); // Armazena os dados do usuário no contexto
        return response.data;
      } else {
        setErrorMessage('Credenciais inválidas.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Credenciais inválidas.');
      } else {
        console.error('Erro ao fazer login:', error);
        setErrorMessage('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
      }
    }
    return null;
  };

  const register = async (user) => {
    try {
      const response = await axios.post(API_BASE_URL, user);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage(error.response.data);
      } else {
        console.error('Erro ao cadastrar usuário:', error);
        setErrorMessage('Ocorreu um erro ao cadastrar. Por favor, tente novamente mais tarde.');
      }
    }
    return null;
  };

  return {
    login,
    register,
    errorMessage,
    setErrorMessage,
    user,
    logout: logoutContext
  };
};
