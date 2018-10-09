import { connect } from 'react-redux';
import { setPortfolioType } from '../actions';
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
    setPortfolioType
  }
)(PortfolioNav);
