import { connect } from 'react-redux';
import { setRoute } from 'actions';
import List from 'components/Website/Portfolio/List/';
import { getItemsByType } from 'reducers';

const mapStateToProps = state => ({
  type: state.route.urlParts[1],
  items: getItemsByType(state),
  fetching: state.portfolio.fetching,
  error: state.portfolio.error
});

export default connect(
  mapStateToProps,
  {
    setRoute
  }
)(List);
