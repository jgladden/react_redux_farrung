import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Website/Header';
import About from 'components/Website/About';
import Portfolio from 'components/Website/Portfolio';
import Contact from 'components/Website/Contact';
import Footer from 'components/Website/Footer';
import SliderNav from 'components/Website/SliderNav';
import Loading from 'components/Loading';
import PageNotFound from 'components/PageNotFound';

const Website = ({urlParts, DetailContainer}) => {

  if(urlParts.length === 0)
    return(<Loading />);

  if(urlParts[0] !== 'portfolio')
    return(<PageNotFound />);

  let detailView = '';
  
  if(urlParts[0] === 'portfolio' &&
     urlParts[2]
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
      {DetailContainer ? <DetailContainer /> : <Loading />}
    </React.Fragment>
  );
};

Website.propTypes = {
  urlParts: PropTypes.array,
  DetailContainer: PropTypes.object
};

export default Website;
