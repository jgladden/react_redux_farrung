import { connect } from 'react-redux';
import { fetchPortfolio } from '../actions';
import PortfolioList from '../components/PortfolioList';

const getVisiblePortfolio = (portfolio, type) => {
  return portfolio[type] ? portfolio[type] : {};
};

const mapStateToProps = state => ({
  portfolio: getVisiblePortfolio(state.portfolio, state.selected_portfolio_type)
});


const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => {
      dispatch(fetchPortfolio());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioList);
