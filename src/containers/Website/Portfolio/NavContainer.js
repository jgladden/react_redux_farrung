import { connect } from 'react-redux';
import { setRoute } from 'actions';
import Nav from 'components/Website/Portfolio/Nav';
import { getPortfolioTypes } from 'reducers';

const mapStateToProps = state => ({
  portfolioTypes: getPortfolioTypes(state)
});

export default connect(
  mapStateToProps,
  {
    setRoute
  }
)(Nav);
