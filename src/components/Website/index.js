import './styles.scss';
import React from 'react';
import Header from 'components/Website/Header';
import About from 'components/Website/About';
import Portfolio from 'components/Website/Portfolio';
//import PortfolioDetail from 'components/Website/Portfolio/Detail';
import Contact from 'components/Website/Contact';
import Footer from 'components/Website/Footer';
import SliderNav from 'components/Website/SliderNav';

/*
    <Header />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
*/

const Website = () => (
  <section id='contentWrapper'>    
    <Header />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    <SliderNav />
  </section>
);

export default Website;


