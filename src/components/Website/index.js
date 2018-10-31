import React from 'react';
import Header from 'components/Website/Header';
import About from 'components/Website/About';
import PortfolioNavContainer from 'containers/Website/PortfolioNavContainer';
import PortfolioListContainer from 'containers/Website/PortfolioListContainer';
import PortfolioDetailContainer from 'containers/Website/PortfolioDetailContainer';
import MessageFormContainer from 'containers/Website/MessageFormContainer';

const Website = () => (
  <section id='contentWrapper'>    
    <Header />
    <About />
    <PortfolioNavContainer />
    <PortfolioDetailContainer />
    <PortfolioListContainer />
    <MessageFormContainer />
  </section>
);

export default Website;


