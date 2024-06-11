import React from 'react';
import styles from './Logo.module.css';
import logo from '../../images/logo-lg.PNG';

export default props => (
    <aside className={styles["logo"]}>
        <a href="/" className={styles["logo"]}>
            <img src={logo} alt="logo" />
        </a>
    </aside>
);