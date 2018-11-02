import './styles.scss';
import React from 'react';
import Header from 'components/Website/Header';
import About from 'components/Website/About';
import Portfolio from 'components/Website/Portfolio';
import Contact from 'components/Website/Contact';
import Footer from 'components/Website/Footer';
import SliderNav from 'components/Website/SliderNav';
import DetailContainer from 'containers/Website/Portfolio/DetailContainer';

const Website = () => (
  <React.Fragment>
    <section id='contentWrapper'>    
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </section>
    <SliderNav />
    <DetailContainer />
  </React.Fragment>
);

export default Website;


