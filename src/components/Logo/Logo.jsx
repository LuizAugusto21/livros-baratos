import './Logo.css';
import React from 'react';
import logo from '../../images/logo-lg.PNG';

export default props => (
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
);