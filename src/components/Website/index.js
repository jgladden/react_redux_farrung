import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Website/Header';
import About from 'components/Website/About';
import Portfolio from 'components/Website/Portfolio';
import Contact from 'components/Website/Contact';
import Footer from 'components/Website/Footer';
import SliderNav from 'components/Website/SliderNav';

const Website = ({detailClass, DetailContainer}) => (
  <React.Fragment>
    <section 
      id='contentWrapper'
      className={detailClass}
    >    
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

Website.propTypes = {
  detailClass: PropTypes.string.isRequired,
  DetailContainer: PropTypes.func.isRequired
};

export default Website;
