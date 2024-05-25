import './Logo.css';
import React from 'react';
// import logo from '../../images/logo-lg.PNG';

function Logo(props) {
  return (
    <aside className="logo">
      <a href="/" className="logo">
        <img src='/images/logo-lg.PNG' alt="logo" />
      </a>
    </aside>
  );
}

export default Logo;