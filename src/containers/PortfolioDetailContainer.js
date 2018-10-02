import { connect } from 'react-redux';
import PortfolioDetail from '../components/PortfolioDetail';

const getPortfolioDetails = (portfolio, type, id) => {
  return portfolio[type] && portfolio[type][id] ? portfolio[type][id] : {};
};

const mapStateToProps = state => ({
  portfolioDetails: getPortfolioDetails(state.portfolio, state.portfolio_type, state.portfolio_id)
});

export default connect(
  mapStateToProps,
  {}
)(PortfolioDetail);
