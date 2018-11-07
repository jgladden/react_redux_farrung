import './styles.scss';
import React from 'react';
import imgLogo from 'img/site/logo.gif';

const todaysDate = () => {
  const d = new Date();
  return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
};

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a href='#about'>about</a></li>
        <li><a href='#work'>work</a></li>
        <li><a href='#connect'>connect</a></li>
      </ul>
      <p id='date'>
      {todaysDate()}
      </p>
    </nav>
    <div id='logoWrapper'>
      <img id='logo' src={imgLogo} alt='Farrung Logo'/>
    </div>
  </header>
);

export default Header;
