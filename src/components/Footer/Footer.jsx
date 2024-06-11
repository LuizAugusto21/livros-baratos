import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles["footer-box"]}>
        <img src="/LogoFooter.png" alt="Logo Livros baratos" />
        <p className={styles["footer-box-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum  </p>
    </footer>
  )
}