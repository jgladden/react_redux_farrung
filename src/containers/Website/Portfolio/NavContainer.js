import { connect } from 'react-redux';
import { setSection } from 'actions';
import Nav from 'components/Website/Portfolio/Nav';
import { getPortfolioTypes } from 'reducers/portfolio';

const mapStateToProps = state => ({
  portfolioTypes: getPortfolioTypes(state)
});

export default connect(
  mapStateToProps,
  {
    setSection
  }
)(Nav);
