import './styles.scss';
import React from 'react';
import PortfolioNav from 'components/Website/Portfolio/Nav/Nav';
import PortfolioList from 'components/Website/Portfolio/List/List';

const Portfolio = () => (
  <article id="portfolioWrapper">
    <a name="work"></a>
    <h1>WORK</h1>
    <h2>a picture is worth a thousand words</h2>
    <h3>cliche for a reason</h3>
    <div id="portfolio">
      <PortfolioNav />
      <PortfolioList />
    </div>
  </article>
);

export default Portfolio;


