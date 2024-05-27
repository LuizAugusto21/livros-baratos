import React, { useState } from "react";
import "./header.scss";
import SearchBar from "../SearchBar/SearchBar";
import ProfilePic from "../Profile/ProfilePic";
import { useNavigate } from "react-router-dom";

export default function Header({ isLogged, isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        className="Logo"
        src="/LogoHeader.png"
        alt="Logo contendo um livro e nome"
        onClick={navigate("/")}
      />{" "}
      <div className="nav">
        {isHome ? null : <SearchBar className="BarraPesquisa"></SearchBar>}
        <ul className="navMenu">
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
          <button onClick={() => navigate("/login")}>Login</button>
        ) : (
          <div className="menu-images">
            <a href="#favorite">
              <img
                src="/favorite.png"
                alt="itens favoritos"
                href=""
                width={38}
              />
            </a>

            <a href="#Carrinho">
              <img src="/cart.png" alt="Carrinho" width={38} />
            </a>

            <div className="avatarMenu">
              <div className="avatarProfile" onClick={toggleMenu}>
                <ProfilePic high={50}></ProfilePic>
                <div className="arrow-icon">▼</div>
              </div>
              {isMenuOpen && (
                <div className="menuBox">
                  <ul className="menuBox-list">
                    <li className="Profile"> <img src="/ProfileIcon.svg" alt="" /> Conta</li>
                    <li className="Config"> <img src="/ConfigIcon.svg" alt="" />Configurações</li>
                    <li className="Exit"><img src="/ExitIcon.svg" alt="" /> Sair</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
