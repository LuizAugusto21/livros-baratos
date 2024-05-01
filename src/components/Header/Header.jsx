import React from 'react';
import './header.scss'; 

import SearchBar from '../SearchBar/SearchBar';

export default function Header({ isLogged, isHome }) {
  return (
    <div>
      {isHome ? (
        // header para usuário na página inicial(sem barra de pesquisa)
        <div className="header">
          <img src="/LogoHeader.png" alt="Logo contendo um livro e nome" />
          
          <ul>
            <li><a href="#vender">Vender</a></li>
            <li><a href="#sebos">Sebos</a></li>
            <li><a href="#proximidade">Por proximidade</a></li>
          </ul>

          {/* Verfica se está logado para exibir o botão de login ou o avatar */}
          { !isLogged ? (
            <button>Login</button>
          ): (<h1>teste</h1>)}
          </div>
  
      ) :  (

        // header para usuário fora da página inicial(com barra de pesquisa)
        <div className="header">
          <img src="/LogoHeader.png" alt="Logo contendo um livro e nome" />

          <SearchBar className="BarraPesquisa"></SearchBar>
          <ul>
            <li><a href="#vender">Vender</a></li>
            <li><a href="#sebos">Sebos</a></li>
            <li><a href="#proximidade">Por proximidade</a></li>
          </ul>

          {/* Verfica se está logado para exibir o botão de login ou o avatar */}
          { !isLogged ? (
            <button>Login</button>
          ): (<h1>teste</h1>)}
          
        </div>
        )
      }
    </div>
  );
}
