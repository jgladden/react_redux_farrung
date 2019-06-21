import { connect } from 'react-redux';
import List from 'components/Website/Portfolio/List/';
import { getItemsSortedByRating } from 'reducers';

const mapStateToProps = state => ({
  items: getItemsSortedByRating(state),
  fetching: state.portfolio.fetching,
  error: state.portfolio.error
});

export default connect(
  mapStateToProps,
  {}
)(List);
