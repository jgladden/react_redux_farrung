import { connect } from 'react-redux';
import { setPortfolioType } from '../actions';
import PortfolioNav from '../components/PortfolioNav';

const getPortfolioTypes = portfolio => {
  return Object.keys(portfolio);
};

const mapStateToProps = state => ({
  portfolioTypes: getPortfolioTypes(state.portfolio)
});

export default connect(
  mapStateToProps,
  {
    setPortfolioType
  }
)(PortfolioNav);
