import { connect } from 'react-redux';
import { fetchPortfolio, setPortfolioId } from '../actions';
import PortfolioList from '../components/PortfolioList';

const getVisiblePortfolio = (portfolio, type) => {
  return portfolio[type] ? portfolio[type] : {};
};

const mapStateToProps = state => ({
  portfolio: getVisiblePortfolio(state.portfolio, state.portfolio_type)
});


const mapDispatchToProps = dispatch => {
  return {
    fetchPortfolio: () => {
      dispatch(fetchPortfolio());
    },
    setPortfolioId: id => {
      dispatch(setPortfolioId({id}));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioList);
