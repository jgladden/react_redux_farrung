import { connect } from 'react-redux';
import { fetchPortfolio, setPortfolioId } from '../actions';
import PortfolioList from '../components/PortfolioList/';

const getVisiblePortfolio = (items, type) => {
  return typeof items !== 'undefined' && items[type] ? items[type] : {};
};

const mapStateToProps = state => ({
  items: getVisiblePortfolio(state.portfolio.items, state.display_portfolio.type),
  fetching: state.portfolio.fetching,
  error: state.portfolio.error
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
