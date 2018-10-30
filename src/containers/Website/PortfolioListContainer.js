import { connect } from 'react-redux';
import { setSection } from 'actions';
import PortfolioList from 'components/Website/PortfolioList/';

const getVisiblePortfolio = (items, type) => {
  const itemsByType = typeof items !== 'undefined' && items[type] ? items[type] : {};
  return Object.keys(itemsByType)
    .filter(key => {
      return itemsByType[key].display === '1';
    })
    .reduce((obj, key) => {
      obj[key] = itemsByType[key];
      return obj;
    }, {});
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
