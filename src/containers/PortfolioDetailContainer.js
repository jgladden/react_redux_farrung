import { connect } from 'react-redux';
import PortfolioDetail from '../components/PortfolioDetail/';

const getPortfolioDetails = (items, type, id) => {
  return items && items[type] && items[type][id] ? items[type][id] : {};
};

const mapStateToProps = state => ({
  portfolioDetails: getPortfolioDetails(state.portfolio.items, state.display_portfolio.type, state.display_portfolio.id)
});

export default connect(
  mapStateToProps,
  {}
)(PortfolioDetail);
