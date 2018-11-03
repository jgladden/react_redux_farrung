import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Website/Header';
import About from 'components/Website/About';
import Portfolio from 'components/Website/Portfolio';
import Contact from 'components/Website/Contact';
import Footer from 'components/Website/Footer';
import SliderNav from 'components/Website/SliderNav';
import DetailContainer from 'containers/Website/Portfolio/DetailContainer';

const Website = ({primary, secondary, tertiary}) => {
  let detailView = '';
  if(primary === 'portfolio' && 
     tertiary
  ) detailView = 'detailView';
  return (
    <React.Fragment>
      <section 
        id='contentWrapper'
        className={detailView}
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
};

Website.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  tertiary: PropTypes.string
};

export default Website;


