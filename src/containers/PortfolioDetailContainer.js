import { connect } from 'react-redux';
import PortfolioDetail from '../components/PortfolioDetail/';

const getPortfolioDetails = (items, type, id) => {
  return items && items[type] && items[type][id] ? items[type][id] : {};
};

const mapStateToProps = state => ({
  portfolioDetails: getPortfolioDetails(state.portfolio.items, state.section.secondary, state.section.tertiary)
});

export default connect(
  mapStateToProps,
  {}
)(PortfolioDetail);
