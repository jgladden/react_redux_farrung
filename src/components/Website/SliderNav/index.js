import './styles.scss';
import React from 'react';

const SliderNav = () => (
  <section id="sliderNav">
    <a href="#about">
      <p>about</p>
      <p>A</p>
    </a>
    <a 
      href="#work" 
      className='center'
    >
      <p>work</p>
      <p>W</p>
    </a>
    <a href="#connect">
      <p>connect</p>
      <p>C</p>
    </a>
  </section>
);

export default SliderNav;
