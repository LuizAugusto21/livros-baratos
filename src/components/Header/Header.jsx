import React, { useState } from "react";
import "./header.scss";
import SearchBar from "../SearchBar/SearchBar";
import ProfilePic from '../Profile/ProfilePic'

export default function Header({ isLogged, isHome }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="header">
      <img
        className="Logo"
        src="/LogoHeader.png"
        alt="Logo contendo um livro e nome"
      />{" "}
      <div className="nav">
        {isHome ? <SearchBar className="BarraPesquisa"></SearchBar> : null}
        <ul>
          <li>
            <a href="#vender">Vender</a>
          </li>
          <li>
            <a href="#sebos">Sebos</a>
          </li>
          <li>
            <a href="#proximidade">Por proximidade</a>
          </li>
        </ul>

        {/* Verfica se está logado para exibir o botão de login ou o avatar */}
        {!isLogged ? (
          <button>Login</button>
        ) : (
          <div className="menu-images">
            <a href="#favorite">
              <img src="/favorite.png" alt="itens favoritos" href="" width={38} />
            </a>

            <a href="#Carrinho">
              <img src="/cart.png" alt="Carrinho"  width={38}/>
            </a>
            <div className="avatarProfile">
              <ProfilePic high={50}></ProfilePic>
              <div className="arrow-icon">▼</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
