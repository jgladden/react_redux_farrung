import { connect } from 'react-redux';
import { setSection } from '../actions';
import PortfolioList from '../components/PortfolioList/';

const getVisiblePortfolio = (items, type) => {
  return typeof items !== 'undefined' && items[type] ? items[type] : {};
};

const mapStateToProps = state => ({
  type: state.section.secondary,
  items: getVisiblePortfolio(state.portfolio.items, state.section.secondary),
  fetching: state.portfolio.fetching,
  error: state.portfolio.error
});

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(PortfolioList);
