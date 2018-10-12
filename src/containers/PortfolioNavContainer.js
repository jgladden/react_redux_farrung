import { connect } from 'react-redux';
import { setSection } from '../actions';
import PortfolioNav from '../components/PortfolioNav/';

const getPortfolioTypes = items => {
  return items ? Object.keys(items) : [];
};

const mapStateToProps = state => ({
  portfolioTypes: getPortfolioTypes(state.portfolio.items)
});

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(PortfolioNav);
