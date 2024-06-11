import React, { useState } from "react";
import styles from "./header.module.scss";
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
    navigate("/");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  const handleShoppingCartClick = () => {
    navigate("/carrinho");
  };

  return (
    <div className={styles["header"]}>
      <img
        className={styles["Logo"]}
        src="/LogoHeader.png"
        alt="Logo contendo um livro e nome"
        onClick={handleLogoClick}
      />
      <div className={styles["nav"]}>
        {isHome ? null : <SearchBar className={styles["BarraPesquisa"]} />}
        <ul className={styles["navMenu"]}>
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
          <div className={styles["menu-images"]}>
            <a onClick={handleWishlistClick}>
              <img src="/favorite.png" alt="itens favoritos" width={38} />
            </a>

            <a onClick={handleShoppingCartClick}>
              <img src="/cart.png" alt="Carrinho" width={38} />
            </a>

            <div className={styles["avatarMenu"]}>
              <div className={styles["avatarProfile"]} onClick={toggleMenu}>
                <ProfilePic high={50} />
                <div className={styles["arrow-icon"]}>▼</div>
              </div>
              {isMenuOpen && (
                <div className={styles["menuBox"]}>
                  <ul className={styles["menuBox-list"]}>
                    <li className={styles["Profile"]}>
                      <img src="/ProfileIcon.svg" alt="" /> Conta
                    </li>
                    <li className={styles["Config"]}>
                      <img src="/ConfigIcon.svg" alt="" /> Configurações
                    </li>
                    <li className={styles["Exit"]}>
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
