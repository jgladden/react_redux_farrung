import { connect } from 'react-redux';
import { setSection } from 'actions';
import Nav from 'components/Website/Portfolio/Nav';

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
)(Nav);
