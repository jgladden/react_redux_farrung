import './styles.scss';
import React from 'react';
import NavContainer from 'containers/Website/Portfolio/NavContainer';
import ListContainer from 'containers/Website/Portfolio/ListContainer';

const Portfolio = () => (
  <article id="portfolioWrapper">
    <h1>WORK</h1>
    <h2>a picture is worth a thousand words</h2>
    <h3>cliche for a reason</h3>
    <div id="portfolio">
      <NavContainer />
      <ListContainer />
    </div>
  </article>
);

export default Portfolio;


