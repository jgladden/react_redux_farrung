import './styles.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPortfolio } from 'actions';
import PropTypes from 'prop-types';
import Loading from 'components/common/pages/Loading';
import PageNotFound from 'components/common/pages/PageNotFound';
import Detail from 'components/Website/Portfolio/Detail/Detail';
import Header from 'components/Website/Header/Header';
import About from 'components/Website/About/About';
import Portfolio from 'components/Website/Portfolio/Portfolio';
import Contact from 'components/Website/Contact/Contact';
import Footer from 'components/Website/Footer/Footer';
import SliderNav from 'components/Website/SliderNav/SliderNav';

class Website extends Component {

  componentDidMount() {
    this.props.fetchPortfolio();
  }

  render() {
    const { urlParts } = this.props;

    if(urlParts.length === 0)
      return(<Loading />);

    if(urlParts[0] !== 'portfolio')
      return(<PageNotFound />);

    let detailClass = urlParts[2] ? 
      'detailView' : '';

    return (
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
        <Detail />
      </React.Fragment>      
    );
  }
}

Website.propTypes = {
  urlParts: PropTypes.array.isRequired,
  fetchPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

  urlParts: state.route.urlParts
});

export default connect(
  mapStateToProps,
  {
    fetchPortfolio
  }
)(Website);

