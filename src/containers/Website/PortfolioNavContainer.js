import { connect } from 'react-redux';
import { setSection } from 'actions';
import PortfolioNav from 'components/Website/PortfolioNav/';

const getPortfolioTypes = items => {
  return items ? Object.keys(items) : [];
};

const mapStateToProps = state => ({
  portfolioTypes: getPortfolioTypes(state.portfolio.items)
});

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(PortfolioNav);
