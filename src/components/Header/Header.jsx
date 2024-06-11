import React, { useState } from "react";
import "./header.scss";
import SearchBar from "../SearchBar/SearchBar";
import ProfilePic from "../Profile/ProfilePic";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ isLogged, isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    navigate("/User");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleShoppingCartClick = () => {
    navigate("/carrinho");
  };

  return (
    <div className="header">
      <img
        className="Logo"
        src="/LogoHeader.png"
        alt="Logo contendo um livro e nome"
        onClick={handleLogoClick}
      />
      <div className="nav">
        {isHome ? null : <SearchBar className="BarraPesquisa" />}
        <ul className="navMenu">
          <li>
            <Link to=""> Vender</Link>
          </li>
          <li>
            <Link to="/sebos">Sebos</Link>
          </li>
          <li>
            <Link to="/proximidade"> Por proximidade</Link>
          </li>
        </ul>

        {!isLogged ? (
          <button onClick={() => navigate("/login")}>Login</button>
        ) : (
          <div className="menu-images">
            <a onClick={handleWishlistClick}>
              <img src="/favorite.png" alt="itens favoritos" width={38} />
            </a>

            <a onClick={handleShoppingCartClick}>
              <img src="/cart.png" alt="Carrinho" width={38} />
            </a>

            <div className="avatarMenu">
              <div className="avatarProfile" onClick={toggleMenu}>
                <ProfilePic high={50} />
                <div className="arrow-icon">▼</div>
              </div>
              {isMenuOpen && (
                <div className="menuBox">
                  <ul className="menuBox-list">
                    <li className="Profile">
                      <img src="/ProfileIcon.svg" alt="" /> Conta
                    </li>
                    <li className="Config">
                      <img src="/ConfigIcon.svg" alt="" /> Configurações
                    </li>
                    <li className="Exit">
                      <img src="/ExitIcon.svg" alt="" /> Sair
                    </li>
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
