import { connect } from 'react-redux';
import PortfolioDetail from '../components/PortfolioDetail';

const getPortfolioDetails = (items, type, id) => {
  return items && items[type][id] ? items[type][id] : {};
};

const mapStateToProps = state => ({
  portfolioDetails: getPortfolioDetails(state.portfolio.items, state.portfolio_type, state.portfolio_id)
});

export default connect(
  mapStateToProps,
  {}
)(PortfolioDetail);
