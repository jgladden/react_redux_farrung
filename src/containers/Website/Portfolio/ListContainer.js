import { connect } from 'react-redux';
import List from 'components/Website/Portfolio/List/';
import { getItemsByType } from 'reducers';

const mapStateToProps = state => ({
  items: getItemsByType(state),
  fetching: state.portfolio.fetching,
  error: state.portfolio.error
});

export default connect(
  mapStateToProps,
  {}
)(List);
