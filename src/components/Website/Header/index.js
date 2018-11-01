import './styles.scss';
import React from 'react';
import imgLogo from 'img/site/logo.gif';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a href='#' data-to='#aboutWrapper'>about</a></li>
        <li><a href='#' data-to='#portfolioWrapper'>work</a></li>
        <li><a href='#' data-to='#connectWrapper'>connect</a></li>
      </ul>
      <p id='date'>.</p>
    </nav>
    <div id='logoWrapper'>
      <img id='logo' src={imgLogo} alt='Farrung Logo'/>
    </div>
  </header>
);

export default Header;
